import { createContext } from "react";
import type { SheetLayout } from "../core";

/**
 * Context value passed from {@link BottomSheetModal} to descendant {@link BottomSheet} components.
 */
export type BottomSheetContextValue = {
    /**
     * Current layout style (`"standard"` or `"detached"`).
     */
    layout: SheetLayout;
};

/**
 * React context providing layout configuration for bottom sheets.
 * Default value is `layout: "standard"`.
 */
export const BottomSheetContext = createContext<BottomSheetContextValue>({
    layout: "standard",
});
