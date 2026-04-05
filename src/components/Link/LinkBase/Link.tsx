// TODO: Link base will be chnaged to link only

import { clsx } from "clsx";
import { Link as UnstyledLink } from "react-aria-components";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import styles from "./link.module.css";
import type { LinkProps } from "./types";

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
