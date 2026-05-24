import type { ReactElement, ReactNode } from "react";
import type { Dialog, DialogRenderProps } from "react-aria-components";

export interface SideSheetProps
    extends React.ComponentPropsWithRef<typeof Dialog> {
    headline?: ReactNode;
    actions?:
        | ReactElement[]
        | ((renderProps: DialogRenderProps) => ReactElement[]);
}
