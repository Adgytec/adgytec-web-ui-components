import clsx from "clsx";
import { Link } from "react-aria-components";
import { useNavigationContext } from "../../Navigation/navContext";
import {
    NavigationItemStyles,
    navigationItemLabelTypography,
    renderNavItem,
} from "../core";
import { NavigationItemIconRenderer } from "../NavigationItemIconRenderer";
import type { NavigationLinkProps } from "./types";

/**
 * Anchor-based navigation item component.
 *
 * Renders an accessible navigation link that evaluates active URL state matching (using `href`),
 * automatically toggles between resting and active icons, and applies Material Design 3
 * active state pill backgrounds. Automatically adapts between `"expanded"` inline layout and `"collapsed"` rail layout with tooltips and stacked labels.
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
    const { isLinkActive, variant } = useNavigationContext();
    const linkActive =
        typeof isActive === "function"
            ? isActive(href)
            : (isActive ?? isLinkActive?.(href));

    return renderNavItem(
        <Link
            className={(renderProps) =>
                clsx(
                    NavigationItemStyles,
                    navigationItemLabelTypography(variant),
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            href={href}
            {...props}
            data-active={linkActive || undefined}
            data-variant={variant}
        >
            <NavigationItemIconRenderer
                icon={icon}
                activeIcon={activeIcon}
                isActive={linkActive}
            />
            {variant === "expanded" && label}
        </Link>,
        label,
        variant
    );
};
