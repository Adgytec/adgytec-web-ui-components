import { createContext } from "react";
import type { MenuColor, MenuLayout } from "../core";

/**
 * Configuration options propagated from [`MenuTrigger`](src/components/Menu/MenuTrigger/MenuTrigger.tsx)
 * down to child menus.
 */
export type MenuConfigContextValue = {
    /**
     * Color scheme for the menu surface and items.
     */
    color?: MenuColor;
    /**
     * Layout density for the menu items.
     */
    layout?: MenuLayout;
};

/**
 * React context providing menu configuration (`color` and `layout`) to nested menus.
 */
export const MenuConfigContext = createContext<MenuConfigContextValue>({});
