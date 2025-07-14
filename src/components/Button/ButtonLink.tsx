import styles from "./button.module.css";
import { Link as UnstyledLink } from "react-aria-components";
import { Tooltip } from "../Tooltip/Tooltip.tsx";
import { ButtonShape, ButtonVariant, type ButtonLinkProps } from "./types.ts";
import { Splash } from "../Splash/Splash.tsx";
import { useSplash } from "../Splash/useSplash.ts";
import { ColorTheme } from "../../utils/types.ts";

export const ButtonLink = ({
  variant = ButtonVariant.filled,
  theme = ColorTheme.primary,
  shape = ButtonShape.rectangle,
  description,
  underline = true,
  children,
  ...props
}: ButtonLinkProps) => {
  const { coords, handlePress } = useSplash(props.onPress);
  const isChildFunc = typeof children === "function";

  return (
    <Tooltip theme={theme} description={description}>
      <UnstyledLink
        {...props}
        {...(underline && { "data-underline": true })}
        onPress={handlePress}
        className={`${styles["button"]} ${styles["button-link"]} ${styles[variant]} ${styles[theme]} ${styles[shape]}`}
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
      </UnstyledLink>
    </Tooltip>
  );
};
