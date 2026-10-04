import styles from "./color.module.css";

/**
 * Color scheme variants for the menu system:
 * - `"standard"`: Neutral container surface with on-surface text and secondary container selection.
 * - `"vibrant"`: Tertiary container surface with high-contrast tertiary accents.
 */
export type MenuColor = "standard" | "vibrant";

/**
 * CSS class applying the base icon and supporting text color to menu items.
 */
export const menuItemBaseColor = styles["color"];

/**
 * CSS class applying the primary label text color to menu items.
 */
export const menuItemLabelColor = styles["label"];

/**
 * Resolves the CSS class corresponding to a given [`MenuColor`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/core/color.ts#L8) variant.
 *
 * @param color - The selected color variant.
 * @returns The CSS class name.
 */
export const menuColorConfig = (color: MenuColor) => {
    return styles[color];
};

/**
 * CSS class applying base surface coloring to the menu container.
 */
export const menuBaseColor = styles["menu-color"];
