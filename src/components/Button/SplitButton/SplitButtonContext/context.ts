import { createContext } from "react";

export type SplitButtonState = {
    isPending?: boolean;
    isDisabled?: boolean;
};

export const SplitButtonContext = createContext<SplitButtonState>({});
