import { createContext } from "react";
import type { ButtonShape, ButtonSize, CoreButtonColor } from "../../core";

export type ButtonGroupContextValue = {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: CoreButtonColor;
};

export const ButtonGroupContext = createContext<ButtonGroupContextValue>({});
