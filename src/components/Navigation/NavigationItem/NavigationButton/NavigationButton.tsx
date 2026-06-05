import { clsx } from "clsx";
import { useContext } from "react";
import { Button } from "react-aria-components";
import { NavLabelContext } from "../../core";
import { useNavigationContext } from "../../Navigation/navContext";
import { NavigationItemLabelTypography, NavigationItemStyles } from "../core";
import { NavigationItemIconRenderer } from "../NavigationItemIconRenderer";
import type { NavigationButtonProps } from "./types";

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
    const buttonActive = isActive ?? isButtonActive?.(prefix);

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
