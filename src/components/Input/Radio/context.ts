import { createContext } from "react";
import type { RadioLabelPlacement } from "./types";

export type RadioGroupContextValue = {
    labelPlacement?: RadioLabelPlacement;
};

export const RadioGroupContext = createContext<RadioGroupContextValue>({});
