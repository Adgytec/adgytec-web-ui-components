import styles from "./button.module.css";
import { Button as UnstyledButton } from "react-aria-components";
import Tooltip from "../Tooltip/Tooltip.tsx";
import { ButtonShape, ButtonVariant, type ButtonProps } from "./types.ts";
import Splash from "../Splash/Splash.tsx";
import { useSplash } from "../Splash/useSplash.ts";
import { ColorTheme } from "../../utils/types.ts";

const Button = ({
  onPress,
  variant,
  theme = ColorTheme.primary,
  shape = ButtonShape.rectangle,
  children,
  disabled,
  description,
  slot,
}: ButtonProps) => {
  const { coords, handlePress } = useSplash(onPress);

  if (shape === ButtonShape.shrink && variant !== ButtonVariant.text) {
    shape = ButtonShape.rectangle;
  }

  const button = (
    <UnstyledButton
      className={`${styles["button"]} ${styles[variant]} ${styles[theme]} ${styles[shape]}`}
      onPress={handlePress}
      isDisabled={disabled}
      slot={slot}
    >
      {coords && <Splash {...coords} />}
      {children}
    </UnstyledButton>
  );

  if (!description) {
    return button;
  }

  return (
    <Tooltip theme={theme} description={description}>
      {button}
    </Tooltip>
  );
};

export default Button;
