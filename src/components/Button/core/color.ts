import styles from "./color.module.css";

type CoreButtonColor = "filled" | "tonal" | "outlined";

export type ButtonColor = CoreButtonColor | "elevated" | "text";

export type ToggleButtonColor = CoreButtonColor | "elevated";

export type IconButtonColor = CoreButtonColor | "standard";

export const buttonColorConfig = (color: ButtonColor | IconButtonColor) => {
    return styles[color];
};

export const buttonColorBase = styles["base"];
