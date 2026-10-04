import { typography } from "@/utils/typography";
import styles from "./size.module.css";

/**
 * Supported size presets for button and button group components.
 * Controls dimensions, typography, icon scale, and internal padding.
 */
export type ButtonSize =
    | "extra-small"
    | "small"
    | "medium"
    | "large"
    | "extra-large";

/**
 * Maps each {@link ButtonSize} preset to its recommended icon size in pixels
 * for standard labeled buttons (with leading or trailing icons).
 */
export const ButtonIconSizeMapping: Record<ButtonSize, number> = {
    "extra-small": 20,
    small: 20,
    medium: 24,
    large: 32,
    "extra-large": 40,
} as const;

/**
 * Maps each {@link ButtonSize} preset to its recommended icon size in pixels
 * for icon-only buttons (e.g. `IconButton`, `ToggleIconButton`, `LinkIconButton`).
 * Note that the `"small"` preset uses 24px for icon buttons compared to 20px in labeled buttons.
 */
export const IconButtonIconSizeMapping: Record<ButtonSize, number> = {
    "extra-small": 20,
    small: 24,
    medium: 24,
    large: 32,
    "extra-large": 40,
} as const;

/**
 * Maps each {@link ButtonSize} preset to its typography token class name
 * for button label text.
 */
export const ButtonLabelTextMapping: Record<ButtonSize, string> = {
    "extra-small": typography.labelLarge,
    small: typography.labelLarge,
    medium: typography.bodyLargeEmphasized,
    large: typography.headlineSmall,
    "extra-large": typography.headlineLarge,
} as const;

/**
 * Resolves the CSS module class name for a given button size preset.
 *
 * @param size - The button size preset to retrieve styling for.
 * @returns The CSS module class name corresponding to the specified size.
 */
export const buttonSizeConfig = (size: ButtonSize) => {
    return styles[size];
};

/**
 * Base CSS module class name applying common layout and sizing structure across buttons.
 */
export const ButtonSizeBase = styles["size"];
