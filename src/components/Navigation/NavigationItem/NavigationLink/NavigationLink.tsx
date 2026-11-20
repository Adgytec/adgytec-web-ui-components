import clsx from "clsx";
import { composeRenderProps, Link } from "react-aria-components";
import { BadgeAnchor } from "@/components/Badge";
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
    icon,
    activeIcon,
    label,
    href,
    isActive,
    badge,
    ...props
}) => {
    const { isLinkActive, variant } = useNavigationContext();
    const linkActive =
        typeof isActive === "function"
            ? isActive(href)
            : (isActive ?? isLinkActive?.(href));

    const renderedIcon = (
        <NavigationItemIconRenderer
            icon={icon}
            activeIcon={activeIcon}
            isActive={linkActive}
        />
    );

    return renderNavItem(
        <Link
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(
                    NavigationItemStyles,
                    navigationItemLabelTypography(variant),
                    className
                )
            )}
            href={href}
            data-active={linkActive || undefined}
            data-variant={variant}
        >
            {variant === "collapsed" && badge ? (
                <BadgeAnchor badge={badge}>{renderedIcon}</BadgeAnchor>
            ) : (
                renderedIcon
            )}
            {variant === "expanded" && (
                <>
                    {label} {badge}
                </>
            )}
        </Link>,
        label,
        variant
    );
};
