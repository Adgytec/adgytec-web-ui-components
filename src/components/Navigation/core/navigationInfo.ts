import { createContext, useContext } from "react";

export type NavigationInfoContextType = {
    id: string;
    depth: number;
};

export const NavigationInfoContext =
    createContext<NavigationInfoContextType | null>(null);

export function useNavigationInfo() {
    const ctx = useContext(NavigationInfoContext);
    if (ctx == null) {
        throw new Error(
            "Missing navigation information. Ensure this component is rendered within a Navigation or SubNavigation component."
        );
    }

    return ctx;
}
