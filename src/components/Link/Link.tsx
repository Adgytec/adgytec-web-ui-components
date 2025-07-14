import type { LinkProps } from "./types";
import { Link as UnstyledLink } from "react-aria-components";
import styles from "./link.module.css";
import { ColorTheme } from "../../utils/types";
import Tooltip from "../Tooltip/Tooltip";

const Link = ({
  theme = ColorTheme.primary,
  description,
  underline = true,
  children,
  ...props
}: LinkProps) => {
  return (
    <Tooltip description={description} theme={theme}>
      <UnstyledLink
        {...props}
        className={props.className ?? `${styles["link"]} ${styles[theme]}`}
        {...(underline && { "data-underline": true })}
      >
        {children}
      </UnstyledLink>
    </Tooltip>
  );
};

export default Link;
