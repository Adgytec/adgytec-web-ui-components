import styles from "./button.module.css";
import { Button as UnstyledButton } from "react-aria-components";

import { ButtonShape, type ButtonProps } from "./types.ts";
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
  slot,
}: ButtonProps) => {
  const { coords, handlePress } = useSplash(onPress);

  return (
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
};

export default Button;
