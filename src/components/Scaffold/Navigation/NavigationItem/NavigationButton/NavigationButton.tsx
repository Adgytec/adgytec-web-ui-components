import { clsx } from "clsx";
import { Button } from "react-aria-components";
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
    slot = "open",
    ...props
}) => {
    const { isButtonActive } = useNavigationContext();
    const buttonActive = isActive ?? isButtonActive?.(prefix);

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
            data-active={buttonActive || undefined}
        >
            <NavigationItemIconRenderer
                icon={icon}
                activeIcon={activeIcon}
                isActive={buttonActive}
            />
            {label}
        </Button>
    );
};
