import { createContext, useContext } from "react";
import type { IsButtonActive, IsLinkActive } from "./types";

/**
 * Context value carrying active predicate functions for child navigation items.
 */
export type NavigationContextType = {
    /**
     * Active predicate function for links.
     */
    isLinkActive?: IsLinkActive;
    /**
     * Active predicate function for buttons.
     */
    isButtonActive?: IsButtonActive;
};

/**
 * React context providing link and button active state predicates to descendant navigation items.
 */
export const NavigationContext = createContext<NavigationContextType | null>(
    null
);

/**
 * Hook to access active state predicates (`isLinkActive` and `isButtonActive`) from the parent
 * [`Navigation`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/Navigation/Navigation.tsx) container.
 *
 * @throws If called outside of a `Navigation` component.
 * @returns The current {@link NavigationContextType}.
 */
export function useNavigationContext() {
    const ctx = useContext(NavigationContext);
    if (ctx === null) {
        throw new Error(
            "Missing navigation state. Ensure this component is rendered within Navigation component."
        );
    }

    return ctx;
}
