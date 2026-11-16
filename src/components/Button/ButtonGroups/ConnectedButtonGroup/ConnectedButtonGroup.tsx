import { clsx } from "clsx";
import { useMemo } from "react";
import {
    ToggleButtonGroup as AriaToggleButtonGroup,
    composeRenderProps,
} from "react-aria-components";
import { ConnectedButtonGroupContext } from "../../core/context";
import styles from "./connectedButtonGroup.module.css";
import type { ConnectedButtonGroupProps } from "./types";

/**
 * A container that visually connects toggle buttons into a single segmented control.
 *
 * Implements connected Material Design 3 Button Groups, merging borders between adjacent buttons
 * and shaping the outer corners to form a unified segmented unit.
 *
 * Built on top of React Aria's `ToggleButtonGroup` supporting single or multiple selection modes.
 * Must be used in conjunction with {@link ConnectedButton}.
 *
 * @example
 * ```tsx
 * <ConnectedButtonGroup selectionMode="multiple" color="outlined">
 *     <ConnectedButton id="bold" icon={Bold} aria-label="Bold" />
 *     <ConnectedButton id="italic" icon={Italic} aria-label="Italic" />
 *     <ConnectedButton id="underline" icon={Underline} aria-label="Underline" />
 * </ConnectedButtonGroup>
 * ```
 */
export const ConnectedButtonGroup: React.FC<ConnectedButtonGroupProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    iconPlacement,
    ...props
}) => {
    const contextValue = useMemo(
        () => ({ size, shape, color, iconPlacement }),
        [size, shape, color, iconPlacement]
    );

    return (
        <ConnectedButtonGroupContext value={contextValue}>
            <AriaToggleButtonGroup
                {...props}
                className={composeRenderProps(props.className, (className) =>
                    clsx(styles["group"], styles[size], className)
                )}
                data-shape={shape}
                data-connected-button-group
            />
        </ConnectedButtonGroupContext>
    );
};
