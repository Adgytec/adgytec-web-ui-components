import { createContext } from "react";
import type { MenuColor, MenuLayout } from "../core";

export type MenuConfigContextValue = {
    color?: MenuColor;
    layout?: MenuLayout;
};

export const MenuConfigContext = createContext<MenuConfigContextValue>({});
