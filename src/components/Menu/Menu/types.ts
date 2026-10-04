import type { Menu } from "react-aria-components";
import type { MenuColor, MenuLayout } from "../core";

/**
 * Props for the [`Menu`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/Menu/Menu.tsx) component.
 *
 * Extends all properties from React Aria's `Menu`, including selection management, keyboard navigation,
 * and collection props.
 */
export interface MenuProps<T extends object>
    extends React.ComponentPropsWithRef<typeof Menu<T>> {
    /**
     * Color scheme for the menu surface and its child items.
     * Overrides any configuration set by the parent [`MenuTrigger`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuTrigger/MenuTrigger.tsx).
     *
     * @default "standard"
     */
    color?: MenuColor;

    /**
     * Layout density for the menu items.
     * Overrides any configuration set by the parent [`MenuTrigger`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuTrigger/MenuTrigger.tsx).
     *
     * @default "standard"
     */
    layout?: MenuLayout;
}
