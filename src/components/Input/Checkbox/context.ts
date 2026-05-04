import { createContext } from "react";
import type { CheckboxLabelPlacement } from "./types";

export type CheckboxGroupContextValue = {
    labelPlacement?: CheckboxLabelPlacement;
};

export const CheckboxGroupContext = createContext<CheckboxGroupContextValue>(
    {}
);
