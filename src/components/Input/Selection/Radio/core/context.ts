import { createContext } from "react";
import type { SelectionLabelPlacement } from "../../core";

/**
 * Configuration context value passed down from [`RadioGroup`](src/components/Input/Selection/Radio/RadioGroup/RadioGroup.tsx) to child [`Radio`](src/components/Input/Selection/Radio/Radio/Radio.tsx) components.
 */
export interface RadioGroupContextValue {
    /** Inherited label placement for child radio items. */
    labelPlacement?: SelectionLabelPlacement;
}

/**
 * Context communicating group-level styling configurations to nested radio buttons.
 */
export const RadioGroupContext = createContext<RadioGroupContextValue>({});
