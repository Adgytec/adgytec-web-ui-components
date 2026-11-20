import { clsx } from "clsx";
import { useContext } from "react";
import { Button, composeRenderProps } from "react-aria-components";
import { BadgeAnchor } from "@/components/Badge";
import { NavLabelContext } from "../../core";
import { useNavigationContext } from "../../Navigation/navContext";
import {
    NavigationItemStyles,
    navigationItemLabelTypography,
    renderNavItem,
} from "../core";
import { NavigationItemIconRenderer } from "../NavigationItemIconRenderer";
import type { NavigationButtonProps } from "./types";

/**
 * Button navigation item component.
 *
 * Typically used as an action trigger within a [`SubNavigationTrigger`](src/components/Navigation/SubNavigation/SubNavigationTrigger/SubNavigationTrigger.tsx)
 * to open a nested sub-navigation panel. Automatically evaluates active state matching based on its `prefix`,
 * switches between resting and active icons, and inherits labels from parent triggers.
 * Automatically adapts between `"expanded"` inline layout (with optional trailing badge) and `"collapsed"` rail layout
 * with tooltips and badge anchored over the icon.
 *
 * @example
 * ```tsx
 * import { NavigationButton } from "@adgytec/web-ui-components";
 * import { Briefcase } from "lucide-react";
 *
 * <NavigationButton icon={Briefcase} prefix="/projects" label="Projects" />
 * ```
 */
export const NavigationButton: React.FC<NavigationButtonProps> = ({
    icon,
    activeIcon,
    label,
    prefix,
    isActive,
    badge,
    ...props
}) => {
    const { isButtonActive, variant } = useNavigationContext();
    const buttonActive =
        typeof isActive === "function"
            ? isActive(prefix)
            : (isActive ?? isButtonActive?.(prefix));

    const triggerLabel = useContext(NavLabelContext);
    const buttonLabel = label ?? triggerLabel;

    const renderedIcon = (
        <NavigationItemIconRenderer
            icon={icon}
            activeIcon={activeIcon}
            isActive={buttonActive}
        />
    );

    return renderNavItem(
        <Button
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(
                    NavigationItemStyles,
                    navigationItemLabelTypography(variant),
                    className
                )
            )}
            slot="open"
            data-active={buttonActive || undefined}
            data-variant={variant}
        >
            {variant === "collapsed" && badge ? (
                <BadgeAnchor badge={badge}>{renderedIcon}</BadgeAnchor>
            ) : (
                renderedIcon
            )}
            {variant === "expanded" && (
                <>
                    {buttonLabel} {badge}
                </>
            )}
        </Button>,
        buttonLabel,
        variant
    );
};
