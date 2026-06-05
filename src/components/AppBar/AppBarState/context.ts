import { createContext } from "react";

export type AppBarStateContextType = {
    isScrolling: boolean;
    updateScrolling: (isScrolling: boolean) => void;
};

export const AppBarStateContext = createContext<AppBarStateContextType | null>(
    null
);
