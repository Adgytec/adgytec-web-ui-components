import { createContext } from "react";
import type { CheckboxLabelPlacement } from "./types";

/**
 * Shared context value provided by {@link CheckboxGroup} to child {@link Checkbox} components.
 */
export interface CheckboxGroupContextValue {
    /** Inherited label placement. */
    labelPlacement?: CheckboxLabelPlacement;
    /** Inherited container state layer flag. */
    containerStateLayer?: boolean;
}

/**
 * Context communicating group-level styling configurations to nested checkboxes.
 */
export const CheckboxGroupContext = createContext<CheckboxGroupContextValue>(
    {}
);
