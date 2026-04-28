import { clsx } from "clsx";
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
    return (
        <SplitButtonContext
            value={{
                isPending,
                isDisabled,
                color,
                size,
            }}
        >
            <Toolbar
                className={clsx(
                    styles["split-button"],
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
