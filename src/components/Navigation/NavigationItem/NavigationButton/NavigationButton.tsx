import { clsx } from "clsx";
import { useContext } from "react";
import { Button } from "react-aria-components";
import { NavLabelContext } from "../../core";
import { useNavigationContext } from "../../Navigation/navContext";
import { NavigationItemLabelTypography, NavigationItemStyles } from "../core";
import { NavigationItemIconRenderer } from "../NavigationItemIconRenderer";
import type { NavigationButtonProps } from "./types";

/**
 * Button navigation item component.
 *
 * Typically used as an action trigger within a [`SubNavigationTrigger`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/SubNavigation/SubNavigationTrigger/SubNavigationTrigger.tsx)
 * to open a nested sub-navigation panel. Automatically evaluates active state matching based on its `prefix`,
 * switches between resting and active icons, and inherits labels from parent triggers.
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
    const { isButtonActive } = useNavigationContext();
    const buttonActive =
        typeof isActive === "function"
            ? isActive(prefix)
            : (isActive ?? isButtonActive?.(prefix));

    const triggerLabel = useContext(NavLabelContext);
    const buttonLabel = label ?? triggerLabel;

    return (
        <Button
            className={(renderProps) =>
                clsx(
                    NavigationItemStyles,
                    NavigationItemLabelTypography,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            slot="open"
            data-active={buttonActive || undefined}
        >
            <NavigationItemIconRenderer
                icon={icon}
                activeIcon={activeIcon}
                isActive={buttonActive}
            />
            {buttonLabel}
        </Button>
    );
};
