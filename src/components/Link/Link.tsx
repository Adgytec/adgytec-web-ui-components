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
    className,
    children,
    ...props
}) => {
    if (visual !== "link") {
        return (
            <ButtonLink
                underline={underline}
                theme={theme}
                description={description}
                visual={visual}
                className={className}
                {...props}
            >
                {children}
            </ButtonLink>
        );
    }

    return (
        <Tooltip description={description} theme={theme}>
            <UnstyledLink
                className={clsx(styles["link"], theme, className)}
                {...(underline && { "data-underline": true })}
                {...props}
            >
                {children}
            </UnstyledLink>
        </Tooltip>
    );
};
