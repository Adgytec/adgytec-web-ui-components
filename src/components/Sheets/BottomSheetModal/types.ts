import type { Modal } from "react-aria-components";
import type { SheetLayout } from "../core";

export interface BottomSheetModalProps
    extends React.ComponentPropsWithRef<typeof Modal> {
    layout?: SheetLayout;
}
