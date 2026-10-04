import { createContext } from "react";
import type { RadioLabelPlacement } from "./types";

/**
 * Shared context value provided by {@link RadioGroup} to child {@link Radio} components.
 */
export interface RadioGroupContextValue {
    /** Inherited label placement. */
    labelPlacement?: RadioLabelPlacement;
    /** Inherited container state layer flag. */
    containerStateLayer?: boolean;
}

/**
 * Context communicating group-level styling configurations to nested radio buttons.
 */
export const RadioGroupContext = createContext<RadioGroupContextValue>({});
