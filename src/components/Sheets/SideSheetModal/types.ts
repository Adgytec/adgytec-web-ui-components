import type { Modal } from "react-aria-components";
import type { SheetLayout } from "../core";

export type SideSheetAlignment = "start" | "end";

export interface SideSheetModalProps
    extends React.ComponentPropsWithRef<typeof Modal> {
    alignment?: SideSheetAlignment;
    layout?: SheetLayout;
}
