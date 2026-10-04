import styles from "./layout.module.css";

/**
 * Layout density variants for the menu:
 * - `"standard"`: Default density with standard item heights and padding.
 * - `"grouped"`: Grouped layout with compact spacing for nested or sectioned menus.
 */
export type MenuLayout = "standard" | "grouped";

/**
 * Standard dimension (20px) for leading and trailing icons in menu items.
 */
export const MenuItemIconSize = 20;

/**
 * CSS class applying the base flex layout to the menu list.
 */
export const MenuBaseLayout = styles["layout"];

/**
 * Resolves the CSS class corresponding to a given [`MenuLayout`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/core/layout.ts#L8) variant.
 *
 * @param layout - The layout density variant.
 * @returns The CSS class name.
 */
export const menuLayoutConfig = (layout: MenuLayout) => {
    return styles[layout];
};
