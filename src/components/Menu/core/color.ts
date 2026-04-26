import styles from "./color.module.css";

export type MenuColor = "standard" | "vibrant";

export const menuItemBaseColor = styles["color"];

export const menuItemLabelColor = styles["label"];

export const menuColorConfig = (color: MenuColor) => {
    return styles[color];
};
