import { createContext, useContext } from "react";
import type { FABVariants } from "../../core";

/**
 * Context value representing the active semantic variant for a FAB Menu tree.
 */
export type FABMenuVariantContextValue = {
    /**
     * Semantic color variant inherited by FAB Menu components.
     */
    variant: FABVariants;
};

/**
 * React Context providing the semantic FAB variant from {@link FABMenuTrigger} to descendant components.
 */
export const FABMenuVariantContext = createContext<FABMenuVariantContextValue>({
    variant: "primary",
});

/**
 * Custom hook to access the current semantic FAB variant in a FAB Menu tree.
 *
 * @returns The active {@link FABVariants} ("primary", "secondary", or "tertiary").
 */
export function useFABMenuVariant() {
    const { variant } = useContext(FABMenuVariantContext);
    return variant;
}
