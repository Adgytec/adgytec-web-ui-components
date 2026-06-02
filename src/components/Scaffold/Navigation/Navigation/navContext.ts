import { createContext, useContext } from "react";
import type { IsButtonActive, IsLinkActive } from "./types";

export type NavigationContextType = {
    isLinkActive?: IsLinkActive;
    isButtonActive?: IsButtonActive;
};

export const NavigationContext = createContext<NavigationContextType | null>(
    null
);

export function useNavigationContext() {
    const ctx = useContext(NavigationContext);
    if (ctx === null) {
        throw new Error(
            "Missing navigation state. Ensure this component is rendered within Navigation component."
        );
    }

    return ctx;
}
