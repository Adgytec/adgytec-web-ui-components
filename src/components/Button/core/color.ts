import styles from "./color.module.css";

export type CoreButtonColor = "filled" | "tonal" | "outlined";

export type ButtonColor = CoreButtonColor | "elevated" | "text";

export type ToggleButtonColor = CoreButtonColor | "elevated";

export type IconButtonColor = CoreButtonColor | "standard";

export type SplitButtonColor = CoreButtonColor | "elevated";

export type ConnectedButtonGroupColor = CoreButtonColor | "elevated";

export const buttonColorConfig = (
    color:
        | ButtonColor
        | IconButtonColor
        | SplitButtonColor
        | ConnectedButtonGroupColor
) => {
    return styles[color];
};

export const buttonColorBase = styles["color"];
