import { createContext, useContext } from "react";

export type NavigationRenderingContextType = HTMLDivElement;

export const NavigationRenderingContext =
    createContext<NavigationRenderingContextType | null>(null);

export function useNavigationContainer() {
    const container = useContext(NavigationRenderingContext);
    if (container === null) {
        throw new Error(
            "Missing navigation rendering info. Ensure this component is rendered within Navigation component."
        );
    }

    return container;
}
