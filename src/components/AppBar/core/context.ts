import { createContext, useContext } from "react";
import type { AppBarAlignment } from "./alignment";
import type { AppBarSize } from "./size";

/**
 * Context value provided by the {@link AppBar} container to descendant components (such as {@link AppBarHeadline}).
 */
export type AppBarContextType = {
    /** The active layout size variant of the AppBar. */
    size: AppBarSize;
    /** The active headline alignment mode. */
    alignment: AppBarAlignment;
    /** The headline container height in pixels. */
    headlineBlockSize: number;
    /** The active typography CSS class name for the headline. */
    headlineTypography: string;
};

/**
 * React context for sharing configuration between {@link AppBar} and its descendants.
 */
export const AppBarContext = createContext<AppBarContextType | null>(null);

/**
 * Custom hook to access the active {@link AppBarContext}.
 *
 * @throws {Error} If called outside of an `<AppBar>` provider tree.
 * @returns The active {@link AppBarContextType} values.
 */
export function useAppBarContext() {
    const context = useContext(AppBarContext);

    if (!context) {
        throw new Error(
            "useAppBarContext must be used within AppBar component"
        );
    }

    return context;
}
