import { createContext } from "react";
import type { SheetLayout } from "../core";
import type { SideSheetAlignment } from "./types";

export type SideSheetContextValue = {
    layout: SheetLayout;
    alignment: SideSheetAlignment;
};

export const SlideSheetContext = createContext<SideSheetContextValue>({
    layout: "standard",
    alignment: "end",
});
