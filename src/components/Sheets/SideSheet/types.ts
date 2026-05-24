import type { ReactElement, ReactNode } from "react";
import type { Dialog, DialogRenderProps } from "react-aria-components";
import type { SheetLayout } from "../core";

export type SideSheetAlignment = "start" | "end";

export interface SideSheetProps
    extends React.ComponentPropsWithRef<typeof Dialog> {
    headline?: ReactNode;
    alignment?: SideSheetAlignment;
    layout?: SheetLayout;
    actions?:
        | ReactElement[]
        | ((renderProps: DialogRenderProps) => ReactElement[]);
}
