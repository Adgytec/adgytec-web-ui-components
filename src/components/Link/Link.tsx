import { clsx } from "clsx";
import { Link as UnstyledLink } from "react-aria-components";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { ButtonLink } from "./ButtonLink";
import styles from "./link.module.css";
import type { LinkProps } from "./types";

export const Link: React.FC<LinkProps> = ({
    visual = "link",
    theme = "primary",
    description,
    underline = true,
    children,
    ...props
}) => {
    if (visual === "button") {
        return (
            <ButtonLink
                underline={underline}
                theme={theme}
                description={description}
                {...props}
            >
                {children}
            </ButtonLink>
        );
    }

    return (
        <Tooltip description={description} theme={theme}>
            <UnstyledLink
                {...props}
                className={clsx(styles["link"], theme, props.className)}
                {...(underline && { "data-underline": true })}
            >
                {children}
            </UnstyledLink>
        </Tooltip>
    );
};
