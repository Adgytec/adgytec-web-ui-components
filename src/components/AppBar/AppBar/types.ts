import type { ReactElement } from "react";
import type { AppBarAlignment, AppBarSize } from "../core";

export interface AppBarProps
    extends Omit<React.ComponentPropsWithRef<"header">, "children"> {
    size?: AppBarSize;
    alignment?: AppBarAlignment;
    leadingAction?: ReactElement;
    trailingActions?: ReactElement[];
    headline?: ReactElement;
}
