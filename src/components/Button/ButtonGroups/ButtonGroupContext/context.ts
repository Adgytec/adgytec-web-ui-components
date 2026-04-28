import { createContext } from "react";
import type { ButtonShape, ButtonSize } from "../../core";

export type ButtonGroupContextValue = {
    size?: ButtonSize;
    shape?: ButtonShape;
};

export const ButtonGroupContext = createContext<ButtonGroupContextValue>({});
