import { clsx } from "clsx";
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
            <div
                className={clsx(
                    styles["split-button"],
                    splitButtonSizeConfig(size)
                )}
            >
                {children}
            </div>
        </SplitButtonContext>
    );
};
