import { createContext, useContext } from "react";

export type NavigationStateContextType = {
    openSubNavigation: (id: string, depth: number) => void;
    closeSubNavigation: (id: string) => void;
    saveNavigationScrollTopProgress: (id: string, progress: number) => void;
    registerNavigationContainer: (
        id: string,
        container: HTMLDivElement
    ) => () => void;

    isSubNavigationOpen: (id: string) => boolean;
    isInert: (depth: number) => boolean;
};

export const NavigationStateContext =
    createContext<NavigationStateContextType | null>(null);

export function useNavigationState() {
    const ctx = useContext(NavigationStateContext);
    if (ctx === null) {
        throw new Error(
            "Missing navigation state. Ensure this component is rendered within Navigation component."
        );
    }

    return ctx;
}
