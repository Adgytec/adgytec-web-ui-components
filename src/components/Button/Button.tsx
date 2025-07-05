import styles from "./button.module.css";
import { Button as UnstyledButton } from "react-aria-components";

import type { ButtonProps } from "./types.ts";
import Splash from "../Splash/Splash.tsx";
import { useSplash } from "../Splash/useSplash.ts";

const Button = ({
  onPress,
  variant,
  theme,
  children,
  disabled,
  slot,
}: ButtonProps) => {
  const { coords, handlePress } = useSplash(onPress);

  return (
    <UnstyledButton
      className={`${styles["button"]} ${styles[variant]} ${styles[theme]}`}
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
