import styles from "./button.module.css";
import { Link as UnstyledLink } from "react-aria-components";
import Tooltip from "../Tooltip/Tooltip.tsx";
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
  description,
  slot,
}: ButtonLinkProps) => {
  const { coords, handlePress } = useSplash();

  const button = (
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

  if (!description) {
    return button;
  }

  return (
    <Tooltip theme={theme} description={description}>
      {button}
    </Tooltip>
  );
};

export default ButtonLink;
