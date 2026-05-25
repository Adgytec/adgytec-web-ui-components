import type { Menu } from "react-aria-components";
import type { MenuColor, MenuLayout } from "../core";

export interface MenuProps<T extends object>
    extends React.ComponentPropsWithRef<typeof Menu<T>> {
    color?: MenuColor;
    layout?: MenuLayout;
}
