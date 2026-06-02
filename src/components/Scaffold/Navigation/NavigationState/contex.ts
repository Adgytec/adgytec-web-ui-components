import { createContext, useContext } from "react";

export type NavigationStateContextType = {
    openSubNavigation: (id: string, depth: number) => void;
    closeSubNavigation: (id: string) => void;
    saveNavigationScrollTop: (id: string, scrollTop: number) => void;

    isSubNavigationOpen: (id: string) => boolean;
    getNavigationScrollTop: (id: string) => number;
    isInert: (depth: number) => boolean;
};

export const NavigationStateContext =
    createContext<NavigationStateContextType | null>(null);

export function useNavigationState() {
    const ctx = useContext(NavigationStateContext);
    if (ctx == null) {
        throw new Error(
            "Missing navigation state. Ensure this component is rendered withi Navigation component."
        );
    }

    return ctx;
}
