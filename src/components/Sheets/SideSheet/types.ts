import type { ReactNode } from "react";
import type { Dialog, DialogRenderProps } from "react-aria-components";

export interface SideSheetDialogProps
    extends React.ComponentPropsWithRef<typeof Dialog> {}

export interface SideSheetProps
    extends React.ComponentPropsWithRef<typeof Dialog> {
    headline?: ReactNode;
    actions?: ReactNode[] | ((renderProps: DialogRenderProps) => ReactNode[]);
}
