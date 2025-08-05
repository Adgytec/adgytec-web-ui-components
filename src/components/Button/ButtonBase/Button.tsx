import styles from "./button.module.css";
import { Button as UnstyledButton } from "react-aria-components";
import { Tooltip } from "@/components/Tooltip";
import { ButtonShape, ButtonVariant, type ButtonProps } from "./types.ts";
import { Splash } from "@/components/Splash/Splash.tsx";
import { useSplash } from "@/components/Splash/useSplash.ts";
import { ColorTheme } from "@/utils/types.ts";

export const Button = ({
  variant,
  theme = ColorTheme.primary,
  shape = ButtonShape.rectangle,
  description,
  children,
  ...props
}: ButtonProps) => {
  const { coords, handlePress } = useSplash(props.onPress);
  const isChildFunc = typeof children === "function";

  if (shape === ButtonShape.shrink && variant !== ButtonVariant.text) {
    shape = ButtonShape.rectangle;
  }

  return (
    <Tooltip theme={theme} description={description}>
      <UnstyledButton
        {...props}
        className={
          props.className ??
          `${styles["button"]} ${styles["button-link"]} ${styles[variant]} ${styles[theme]} ${styles[shape]}`
        }
        onPress={handlePress}
      >
        {isChildFunc ? (
          (values) => (
            <>
              {coords && <Splash {...coords} />}
              {children(values)}
            </>
          )
        ) : (
          <>
            {coords && <Splash {...coords} />}
            {children}
          </>
        )}
      </UnstyledButton>
    </Tooltip>
  );
};
