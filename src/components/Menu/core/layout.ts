import styles from "./layout.module.css";

export type MenuLayout = "standard" | "grouped";

export const MenuItemIconSize = 20;

export const MenuBaseLayout = styles["layout"];

export const menuLayoutConfig = (layout: MenuLayout) => {
    return styles[layout];
};
