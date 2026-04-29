import { clsx } from "clsx";
import { useMemo } from "react";
import { ToggleButtonGroup as AriaToggleButtonGroup } from "react-aria-components";
import { ConnectedButtonGroupContext } from "../ButtonGroupContext";
import type { ConnectedButtonGroupProps } from "./types";

export const ConnectedButtonGroup: React.FC<ConnectedButtonGroupProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    className,
    ...props
}) => {
    const contextValue = useMemo(
        () => ({ size, shape, color }),
        [size, shape, color]
    );

    return (
        <ConnectedButtonGroupContext value={contextValue}>
            <AriaToggleButtonGroup
                className={(renderProps) =>
                    clsx(
                        typeof className === "function"
                            ? className(renderProps)
                            : className
                    )
                }
                {...props}
            />
        </ConnectedButtonGroupContext>
    );
};
