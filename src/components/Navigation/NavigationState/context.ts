import { createContext, useContext } from "react";

/**
 * Context value managing sub-navigation transitions, inert state tracking, and scroll progress synchronization.
 */
export type NavigationStateContextType = {
    /**
     * Opens a sub-navigation panel at the specified depth level.
     */
    openSubNavigation: (id: string, depth: number) => void;
    /**
     * Closes the sub-navigation panel matching `id` and any panels nested deeper.
     */
    closeSubNavigation: (id: string) => void;
    /**
     * Saves scroll progress (0 to 1) for the navigation level matching `id`.
     */
    saveNavigationScrollTopProgress: (id: string, progress: number) => void;

    /**
     * Checks whether a given sub-navigation panel is currently open.
     */
    isSubNavigationOpen: (id: string) => boolean;
    /**
     * Checks whether a given depth level should be inert (i.e. covered by a deeper active sub-navigation panel).
     */
    isInert: (depth: number) => boolean;

    /**
     * Retrieves the saved scroll progress (0 to 1) for the navigation level matching `id`.
     */
    getNavigationScrollProgress: (id: string) => number;
};

/**
 * React context coordinating navigation transition stacks, inert states, and scroll synchronization.
 */
export const NavigationStateContext =
    createContext<NavigationStateContextType | null>(null);

/**
 * Hook to access the current navigation state manager.
 *
 * @throws If called outside of a [`NavigationState`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationState/NavigationState.tsx)
 * or [`Navigation`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/Navigation/Navigation.tsx) component.
 * @returns The current {@link NavigationStateContextType}.
 */
export function useNavigationState() {
    const ctx = useContext(NavigationStateContext);
    if (ctx === null) {
        throw new Error(
            "Missing navigation state. Ensure this component is rendered within Navigation component."
        );
    }

    return ctx;
}
