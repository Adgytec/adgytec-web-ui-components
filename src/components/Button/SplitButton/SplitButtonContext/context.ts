import { createContext } from "react";
import type { ButtonSize, SplitButtonColor } from "../../core";

export type SplitButtonState = {
    isPending?: boolean;
    isDisabled?: boolean;

    size: ButtonSize;
    color: SplitButtonColor;
};

export const SplitButtonContext = createContext<SplitButtonState>({
    size: "small",
    color: "filled",
});
