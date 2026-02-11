import type { LinkProps } from "./types";
import { Link as UnstyledLink } from "react-aria-components";
import styles from "./link.module.css";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { clsx } from "clsx";

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
                className={clsx(styles["link"], styles[theme], props.className)}
                {...(underline && { "data-underline": true })}
            >
                {children}
            </UnstyledLink>
        </Tooltip>
    );
};
