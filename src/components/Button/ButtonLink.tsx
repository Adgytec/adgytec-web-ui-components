import styles from "./button.module.css";
import { Link as UnstyledLink } from "react-aria-components";

import type { ButtonLinkProps } from "./types.ts";
import Splash from "../Splash/Splash.tsx";
import { useSplash } from "../Splash/useSplash.ts";

const ButtonLink = ({
  href,
  target,
  variant,
  theme,
  children,
  disabled,
}: ButtonLinkProps) => {
  const { coords, handlePress } = useSplash();

  return (
    <UnstyledLink
      className={`${styles["button"]} ${styles["button-link"]} ${styles[variant]} ${styles[theme]}`}
      onPress={handlePress}
      href={href}
      target={target}
      isDisabled={disabled}
    >
      {coords && <Splash {...coords} />}

      {children}
    </UnstyledLink>
  );
};

export default ButtonLink;
