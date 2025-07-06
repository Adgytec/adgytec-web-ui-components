import styles from "./button.module.css";
import { Link as UnstyledLink } from "react-aria-components";

import { ButtonShape, ButtonVariant, type ButtonLinkProps } from "./types.ts";
import Splash from "../Splash/Splash.tsx";
import { useSplash } from "../Splash/useSplash.ts";
import { ColorTheme } from "../../utils/types.ts";

const ButtonLink = ({
  href,
  target,
  variant = ButtonVariant.filled,
  theme = ColorTheme.primary,
  shape = ButtonShape.rectangle,
  children,
  disabled,
  slot,
}: ButtonLinkProps) => {
  const { coords, handlePress } = useSplash();

  return (
    <UnstyledLink
      className={`${styles["button"]} ${styles["button-link"]} ${styles[variant]} ${styles[theme]} ${styles[shape]}`}
      onPress={handlePress}
      href={href}
      target={target}
      isDisabled={disabled}
      slot={slot}
    >
      {coords && <Splash {...coords} />}

      {children}
    </UnstyledLink>
  );
};

export default ButtonLink;
