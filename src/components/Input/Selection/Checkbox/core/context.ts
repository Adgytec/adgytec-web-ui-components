import { createContext } from "react";
import type { SelectionLabelPlacement } from "../../core";

/**
 * Configuration context value passed down from [`CheckboxGroup`](src/components/Input/Checkbox/CheckboxGroup.tsx) to child [`Checkbox`](src/components/Input/Checkbox/Checkbox.tsx) components.
 */
export interface CheckboxGroupContextValue {
    /** Inherited label placement for child checkbox items. */
    labelPlacement?: SelectionLabelPlacement;
}

/**
 * Context communicating group-level styling configurations to nested checkboxes.
 */
export const CheckboxGroupContext = createContext<CheckboxGroupContextValue>(
    {}
);
