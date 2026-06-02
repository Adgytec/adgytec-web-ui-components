import clsx from "clsx";
import { Link } from "react-aria-components";
import { NavigationItemLabelTypography, NavigationItemStyles } from "../core";
import { NavigationItemIconRenderer } from "../NavigationItemIconRenderer";
import type { NavigationLinkProps } from "./types";

export const NavigationItemLink: React.FC<NavigationLinkProps> = ({
    className,
    icon,
    activeIcon,
    label,
    href,
    isActive,
    ...props
}) => {
    return (
        <Link
            className={(renderProps) =>
                clsx(
                    NavigationItemStyles,
                    NavigationItemLabelTypography,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            href={href}
            {...props}
            data-active={isActive || undefined}
        >
            <NavigationItemIconRenderer
                icon={icon}
                activeIcon={activeIcon}
                isActive={isActive}
            />
            {label}
        </Link>
    );
};
