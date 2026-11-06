import { createContext } from "react";
import type { SheetLayout } from "../core";
import type { SideSheetAlignment } from "./types";

/**
 * Context value passed from {@link SideSheetModal} to descendant side sheet components like {@link SideSheetDialog} and {@link SideSheet}.
 */
export type SideSheetContextValue = {
    /**
     * Current layout style (`"standard"` or `"detached"`).
     */
    layout: SheetLayout;
    /**
     * Current alignment edge (`"start"` or `"end"`).
     */
    alignment: SideSheetAlignment;
};

/**
 * React context providing layout and alignment properties for side sheets.
 * Default values are `layout: "standard"` and `alignment: "end"`.
 */
export const SideSheetContext = createContext<SideSheetContextValue>({
    layout: "standard",
    alignment: "end",
});
