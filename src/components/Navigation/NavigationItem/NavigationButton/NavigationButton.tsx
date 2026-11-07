import { clsx } from "clsx";
import { useContext } from "react";
import { Button } from "react-aria-components";
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
 * Automatically adapts between `"expanded"` inline layout and `"collapsed"` rail layout with tooltips and stacked labels.
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
    className,
    icon,
    activeIcon,
    label,
    prefix,
    isActive,
    ...props
}) => {
    const { isButtonActive, variant } = useNavigationContext();
    const buttonActive =
        typeof isActive === "function"
            ? isActive(prefix)
            : (isActive ?? isButtonActive?.(prefix));

    const triggerLabel = useContext(NavLabelContext);
    const buttonLabel = label ?? triggerLabel;

    return renderNavItem(
        <Button
            className={(renderProps) =>
                clsx(
                    NavigationItemStyles,
                    navigationItemLabelTypography(variant),
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            slot="open"
            data-active={buttonActive || undefined}
            data-variant={variant}
        >
            <NavigationItemIconRenderer
                icon={icon}
                activeIcon={activeIcon}
                isActive={buttonActive}
            />
            {variant === "expanded" && buttonLabel}
        </Button>,
        buttonLabel,
        variant
    );
};
