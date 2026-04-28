import { createContext } from "react";
import type { ButtonSize } from "../../core";

export type ButtonGroupContextValue = {
    size: ButtonSize;
};

export const ButtonGroupContext = createContext<ButtonGroupContextValue>({
    size: "small",
});
