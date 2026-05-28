import type { ReactElement } from "react";
import type { AppBarAlignment, AppBarLayout, AppBarSize } from "../core";

export interface AppBarProps
    extends Omit<React.ComponentPropsWithRef<"header">, "children"> {
    layout?: AppBarLayout;
    size?: AppBarSize;
    alignment?: AppBarAlignment;
    leadingAction?: ReactElement;
    trailingActions?: ReactElement[];
    headline?: ReactElement;
}
