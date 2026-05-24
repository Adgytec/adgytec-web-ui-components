import type { ReactElement, ReactNode } from "react";
import type { DialogRenderProps, Modal } from "react-aria-components";
import type { SheetLayout } from "../core";

export type SideSheetAlignment = "start" | "end";

// children and className are assigned to underlying dialog
export interface SideSheetProps
    extends Omit<
        React.ComponentPropsWithRef<typeof Modal>,
        "className" | "children"
    > {
    headline?: ReactNode;
    alignment?: SideSheetAlignment;
    layout?: SheetLayout;
    actions?:
        | ReactElement[]
        | ((renderProps: DialogRenderProps) => ReactElement[]);
    children?: ReactNode | ((renderProps: DialogRenderProps) => ReactNode);
    className?: string;
}
