import { createContext } from "react";
import type { RadioLabelPlacement } from "./types";

/**
 * Configuration context value passed down from [`RadioGroup`](src/components/Input/Radio/RadioGroup.tsx) to child [`Radio`](src/components/Input/Radio/Radio.tsx) components.
 */
export interface RadioGroupContextValue {
    /** Inherited label placement for child radio items. */
    labelPlacement?: RadioLabelPlacement;
}

/**
 * Context communicating group-level styling configurations to nested radio buttons.
 */
export const RadioGroupContext = createContext<RadioGroupContextValue>({});
