import type { LinkProps } from "./types";
import { Link as UnstyledLink } from "react-aria-components";
import styles from "./link.module.css";
import { Tooltip } from "@/components/Tooltip/Tooltip";

export const Link = ({
  theme = "primary",
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
