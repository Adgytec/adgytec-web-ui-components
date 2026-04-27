import { clsx } from "clsx";
import { buttonColorConfig } from "../../core";
import { SplitButtonContext } from "../SplitButtonContext";
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
            }}
        >
            <div className={clsx(buttonColorConfig(color))}>{children}</div>
        </SplitButtonContext>
    );
};
