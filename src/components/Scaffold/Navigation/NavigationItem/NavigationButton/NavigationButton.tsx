import { clsx } from "clsx";
import { Button } from "react-aria-components";
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
    slot = "open",
    ...props
}) => {
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
            slot={slot}
            data-active={isActive || undefined}
        >
            <NavigationItemIconRenderer
                icon={icon}
                activeIcon={activeIcon}
                isActive={isActive}
            />
            {label}
        </Button>
    );
};
