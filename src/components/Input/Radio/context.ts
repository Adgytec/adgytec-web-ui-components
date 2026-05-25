import { createContext } from "react";
import type { RadioLabelPlacement } from "./types";

export type RadioGroupContextValue = {
    labelPlacement?: RadioLabelPlacement;
    containerStateLayer?: boolean;
};

export const RadioGroupContext = createContext<RadioGroupContextValue>({});
