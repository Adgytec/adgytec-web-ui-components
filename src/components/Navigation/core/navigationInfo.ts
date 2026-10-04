import { createContext, useContext } from "react";

/**
 * Identifier and nesting depth information for the current navigation level.
 */
export type NavigationInfoContextType = {
    /**
     * Unique identifier for this navigation level/panel.
     */
    id: string;
    /**
     * Current nesting hierarchy depth (root is 0, sub-navigations increment from 1).
     */
    depth: number;
};

/**
 * React context providing the current navigation level's ID and hierarchy depth.
 */
export const NavigationInfoContext =
    createContext<NavigationInfoContextType | null>(null);

/**
 * Hook to access the current navigation level's unique ID and nesting depth.
 *
 * @throws If rendered outside of a [`Navigation`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/Navigation/Navigation.tsx)
 * or [`SubNavigation`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/SubNavigation/SubNavigation/SubNavigation.tsx) component.
 * @returns The current {@link NavigationInfoContextType}.
 */
export function useNavigationInfo() {
    const ctx = useContext(NavigationInfoContext);
    if (ctx == null) {
        throw new Error(
            "Missing navigation information. Ensure this component is rendered within a Navigation or SubNavigation component."
        );
    }

    return ctx;
}
