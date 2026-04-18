import type { MenuSectionProps as AriaMenuSectionProps } from "react-aria-components";
import type { MenuLayout } from "../core";

export interface MenuSectionProps<T extends object>
    extends AriaMenuSectionProps<T> {
    layout?: MenuLayout;
}
