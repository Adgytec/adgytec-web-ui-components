import { createContext } from "react";
import type { ComboBoxRenderProps } from "react-aria-components";

/**
 * Context communicating ComboBox state (e.g. `isOpen`, `isInvalid`, `isDisabled`) down to {@link ComboBoxTrigger}.
 */
export const ComboboxContext = createContext<Partial<ComboBoxRenderProps>>({});
