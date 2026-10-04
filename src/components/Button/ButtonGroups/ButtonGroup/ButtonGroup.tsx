import { clsx } from "clsx";
import { useMemo } from "react";
import { ToggleButtonGroup as AriaToggleButtonGroup } from "react-aria-components";
import { ButtonGroupContext } from "../ButtonGroupContext";
import styles from "./buttonGroup.module.css";
import type { ButtonGroupProps } from "./types";

/**
 * A group container for related toggle buttons implementing Material Design 3 Button Groups.
 *
 * Displays buttons with consistent spacing and dynamic morphing padding animations when pressed.
 * Provides size, shape, color, and icon placement down to child buttons via context.
 *
 * Built on top of React Aria's `ToggleButtonGroup` supporting single or multiple selection modes.
 *
 * @example
 * ```tsx
 * <ButtonGroup selectionMode="single" color="tonal">
 *     <ToggleButton id="left" icon={AlignLeft} aria-label="Align Left" />
 *     <ToggleButton id="center" icon={AlignCenter} aria-label="Align Center" />
 *     <ToggleButton id="right" icon={AlignRight} aria-label="Align Right" />
 * </ButtonGroup>
 * ```
 */
export const ButtonGroup: React.FC<ButtonGroupProps> = ({
    size,
    shape,
    color,
    className,
    iconPlacement,
    ...props
}) => {
    const contextValue = useMemo(
        () => ({ size, shape, color, iconPlacement }),
        [size, shape, color, iconPlacement]
    );

    return (
        <ButtonGroupContext value={contextValue}>
            <AriaToggleButtonGroup
                className={(renderProps) =>
                    clsx(
                        styles["button-group"],
                        styles[size ?? "small"],
                        typeof className === "function"
                            ? className(renderProps)
                            : className
                    )
                }
                {...props}
                data-button-group
            />
        </ButtonGroupContext>
    );
};
