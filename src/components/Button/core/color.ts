import styles from "./color.module.css";

/**
 * Fundamental Material 3 button color styles shared across all button variants:
 * - `"filled"`: High-emphasis solid surface with inverted text.
 * - `"tonal"`: Medium-high emphasis filled container with primary-tonal background.
 * - `"outlined"`: Medium-emphasis button with container outline and transparent background.
 */
export type CoreButtonColor = "filled" | "tonal" | "outlined";

/**
 * Color variants supported by standard buttons (`Button`, `LinkButton`):
 * - Includes {@link CoreButtonColor} (`"filled"`, `"tonal"`, `"outlined"`).
 * - `"elevated"`: Low-emphasis surface container with shadow elevation.
 * - `"text"`: Lowest-emphasis flat text button with transparent background.
 */
export type ButtonColor = CoreButtonColor | "elevated" | "text";

/**
 * Color variants supported by toggle buttons (`ToggleButton`):
 * - Includes {@link CoreButtonColor} plus `"elevated"`.
 */
export type ToggleButtonColor = CoreButtonColor | "elevated";

/**
 * Color variants supported by icon buttons (`IconButton`, `LinkIconButton`):
 * - Includes {@link CoreButtonColor} plus `"standard"` (unfilled, frameless icon).
 */
export type IconButtonColor = CoreButtonColor | "standard";

/**
 * Color variants supported by split buttons (`SplitButton`):
 * - Includes {@link CoreButtonColor} plus `"elevated"`.
 */
export type SplitButtonColor = CoreButtonColor | "elevated";

/**
 * Color variants supported by connected button groups (`ConnectedButtonGroup`):
 * - Includes {@link CoreButtonColor} plus `"elevated"`.
 */
export type ConnectedButtonGroupColor = CoreButtonColor | "elevated";

/**
 * Union of all valid button color style names across all button components.
 */
export type AllButtonColor =
    | ButtonColor
    | IconButtonColor
    | SplitButtonColor
    | ConnectedButtonGroupColor;

/**
 * Resolves a button color style name to its CSS module class name.
 *
 * @param color - The button color identifier.
 * @returns CSS class name applying the color styling rules.
 */
export const buttonColorConfig = (color: AllButtonColor) => {
    return styles[color];
};

/** CSS class providing base color custom properties and transition states. */
export const buttonColorBase = styles["color"];
