import { clsx } from "clsx";
import { useMemo } from "react";
import { ToggleButtonGroup as AriaToggleButtonGroup } from "react-aria-components";
import { ButtonGroupContext } from "../ButtonGroupContext";
import styles from "./buttonGroup.module.css";
import type { ButtonGroupProps } from "./types";

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
    size,
    shape,
    color,
    className,
    ...props
}) => {
    const contextValue = useMemo(
        () => ({ size, shape, color }),
        [size, shape, color]
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
            />
        </ButtonGroupContext>
    );
};
