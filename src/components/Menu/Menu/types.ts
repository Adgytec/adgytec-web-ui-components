import type { MenuProps as AriaMenuProps } from "react-aria-components";
import type { MenuColor, MenuLayout } from "../core";

export interface MenuProps<T extends object> extends AriaMenuProps<T> {
    color?: MenuColor;
    layout?: MenuLayout;
}
