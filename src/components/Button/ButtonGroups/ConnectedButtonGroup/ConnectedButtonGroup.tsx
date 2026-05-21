import { clsx } from "clsx";
import { useMemo } from "react";
import { ToggleButtonGroup as AriaToggleButtonGroup } from "react-aria-components";
import { ConnectedButtonGroupContext } from "../ButtonGroupContext";
import styles from "./connectedButtonGroup.module.css";
import type { ConnectedButtonGroupProps } from "./types";

export const ConnectedButtonGroup: React.FC<ConnectedButtonGroupProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    iconPlacement,
    className,
    ...props
}) => {
    const contextValue = useMemo(
        () => ({ size, shape, color, iconPlacement }),
        [size, shape, color, iconPlacement]
    );

    return (
        <ConnectedButtonGroupContext value={contextValue}>
            <AriaToggleButtonGroup
                className={(renderProps) =>
                    clsx(
                        styles["group"],
                        styles[size],
                        typeof className === "function"
                            ? className(renderProps)
                            : className
                    )
                }
                {...props}
                data-shape={shape}
            />
        </ConnectedButtonGroupContext>
    );
};
