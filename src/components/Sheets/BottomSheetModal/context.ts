import { createContext } from "react";
import type { SheetLayout } from "../core";

export type BottomSheetContextValue = {
    layout: SheetLayout;
};

export const BottomSheetContext = createContext<BottomSheetContextValue>({
    layout: "standard",
});
