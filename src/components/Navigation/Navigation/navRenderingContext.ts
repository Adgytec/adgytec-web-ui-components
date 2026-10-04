import { createContext, useContext } from "react";

/**
 * Context value providing the DOM reference of the navigation container for sub-navigation portal mounting.
 */
export type NavigationRenderingContextType = {
    /**
     * Outer container DOM node used as the target portal container for sliding sub-navigations.
     */
    container: HTMLDivElement | null;
};

/**
 * React context providing the container DOM element for rendering nested sub-navigation portals.
 */
export const NavigationRenderingContext =
    createContext<NavigationRenderingContextType | null>(null);

/**
 * Hook to access the parent navigation container element used for portal mounting of
 * [`SubNavigation`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/SubNavigation/SubNavigation/SubNavigation.tsx).
 *
 * @throws If called outside of a [`Navigation`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/Navigation/Navigation.tsx) component.
 * @returns The current {@link NavigationRenderingContextType}.
 */
export function useNavigationContainer() {
    const container = useContext(NavigationRenderingContext);
    if (container === null) {
        throw new Error(
            "Missing navigation rendering info. Ensure this component is rendered within Navigation component."
        );
    }

    return container;
}
