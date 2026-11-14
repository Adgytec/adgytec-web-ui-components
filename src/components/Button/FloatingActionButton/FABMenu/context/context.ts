import { createContext, useContext } from "react";
import type { FABVariants } from "../../core";

export type FABMenuVariantContextValue = {
    variant: FABVariants;
};

export const FABMenuVariantContext = createContext<FABMenuVariantContextValue>({
    variant: "primary",
});

export function useFABMenuVariant() {
    const { variant } = useContext(FABMenuVariantContext);
    return variant;
}
