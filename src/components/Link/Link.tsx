import type { LinkProps } from "./types";
import { Link as UnstyledLink } from "react-aria-components";
import styles from "./link.module.css";

const Link = ({ children, href, target, theme, disabled }: LinkProps) => {
  return (
    <UnstyledLink
      className={`${styles["link"]} ${styles[theme]}`}
      href={href}
      target={target}
      isDisabled={disabled}
    >
      {children}
    </UnstyledLink>
  );
};

export default Link;
