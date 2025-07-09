import type { LinkProps } from "./types";
import { Link as UnstyledLink } from "react-aria-components";
import styles from "./link.module.css";
import { ColorTheme } from "../../utils/types";
import Tooltip from "../Tooltip/Tooltip";

const Link = ({
  children,
  href,
  target,
  theme = ColorTheme.primary,
  disabled,
  description,
}: LinkProps) => {
  return (
    <Tooltip description={description} theme={theme}>
      <UnstyledLink
        className={`${styles["link"]} ${styles[theme]}`}
        href={href}
        target={target}
        isDisabled={disabled}
      >
        {children}
      </UnstyledLink>
    </Tooltip>
  );
};

export default Link;
