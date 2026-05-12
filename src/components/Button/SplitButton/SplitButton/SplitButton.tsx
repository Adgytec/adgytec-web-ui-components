import { clsx } from "clsx";
import { useMemo } from "react";
import { Toolbar } from "react-aria-components";
import { splitButtonSizeConfig } from "../core";
import { SplitButtonContext } from "../SplitButtonContext";
import styles from "./splitButton.module.css";
import type { SplitButtonProps } from "./types";

export const SplitButton: React.FC<SplitButtonProps> = ({
    color = "filled",
    size = "small",

    isPending,
    isDisabled,

    children,
    className,

    ...props
}) => {
    const contextValue = useMemo(
        () => ({
            isPending,
            isDisabled,
            color,
            size,
        }),
        [isPending, isDisabled, color, size]
    );

    return (
        <SplitButtonContext value={contextValue}>
            <Toolbar
                className={clsx(
                    styles["split-button"],
                    styles[size],
                    splitButtonSizeConfig(size),
                    className
                )}
                {...props}
            >
                {children}
            </Toolbar>
        </SplitButtonContext>
    );
};
