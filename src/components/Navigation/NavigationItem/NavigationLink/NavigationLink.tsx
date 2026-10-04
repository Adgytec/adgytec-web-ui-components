import clsx from "clsx";
import { Link } from "react-aria-components";
import { useNavigationContext } from "../../Navigation/navContext";
import { NavigationItemLabelTypography, NavigationItemStyles } from "../core";
import { NavigationItemIconRenderer } from "../NavigationItemIconRenderer";
import type { NavigationLinkProps } from "./types";

/**
 * Anchor-based navigation item component.
 *
 * Renders an accessible navigation link that evaluates active URL state matching (using `href`),
 * automatically toggles between resting and active icons, and applies Material Design 3
 * active state pill backgrounds.
 *
 * @example
 * ```tsx
 * import { NavigationLink } from "@adgytec/web-ui-components";
 * import { Home } from "lucide-react";
 *
 * <NavigationLink href="/dashboard" label="Dashboard" icon={Home} />
 * ```
 */
export const NavigationLink: React.FC<NavigationLinkProps> = ({
    className,
    icon,
    activeIcon,
    label,
    href,
    isActive,
    ...props
}) => {
    const { isLinkActive } = useNavigationContext();
    const linkActive =
        typeof isActive === "function"
            ? isActive(href)
            : (isActive ?? isLinkActive?.(href));

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
            data-active={linkActive || undefined}
        >
            <NavigationItemIconRenderer
                icon={icon}
                activeIcon={activeIcon}
                isActive={linkActive}
            />
            {label}
        </Link>
    );
};
