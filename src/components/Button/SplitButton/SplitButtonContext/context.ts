import { createContext } from "react";
import type { ButtonSize, SplitButtonColor } from "../../core";

/**
 * Context state shared across all components of a {@link SplitButton}.
 */
export type SplitButtonState = {
    /** Whether both primary action and trigger buttons are currently in a pending state. */
    isPending?: boolean;
    /** Whether both primary action and trigger buttons are currently disabled. */
    isDisabled?: boolean;

    /** Uniform size preset for the split button pair. */
    size: ButtonSize;
    /** Visual color style variant applied to both split button parts. */
    color: SplitButtonColor;
};

/**
 * React Context providing size, color, pending, and disabled state from
 * a parent `SplitButton` container to `SplitButtonPrimary` and `SplitButtonTrigger`.
 */
export const SplitButtonContext = createContext<SplitButtonState>({
    size: "small",
    color: "filled",
});
