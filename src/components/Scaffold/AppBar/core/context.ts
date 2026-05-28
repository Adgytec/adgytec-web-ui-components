import { createContext, useContext } from "react";
import type { AppBarAlignment } from "./alignment";
import type { AppBarLayout } from "./layout";
import type { AppBarSize } from "./size";

export type AppBarContextType = {
    size: AppBarSize;
    layout: AppBarLayout;
    alignment: AppBarAlignment;
    getHeadlineBlockSize: () => number;
    getHeadlineTypography: () => string;
};

export const AppBarContext = createContext<AppBarContextType | null>(null);

export function useAppBarContext() {
    const context = useContext(AppBarContext);

    if (!context) {
        throw new Error(
            "useAppBarContext must be used within AppBar component"
        );
    }

    return context;
}
