import type { ButtonSize } from "../../core";
import styles from "./size.module.css";

/**
 * Maps each {@link ButtonSize} preset to its corresponding chevron icon size in pixels
 * for {@link SplitButtonTrigger}.
 */
export const SplitButtonTriggerIconSize: Record<ButtonSize, number> = {
    "extra-small": 22,
    small: 22,
    medium: 26,
    large: 38,
    "extra-large": 50,
} as const;

/**
 * Resolves the CSS module class name for a given split button size preset.
 *
 * @param size - The button size preset.
 * @returns The CSS module class name for the split button container size.
 */
export const splitButtonSizeConfig = (size: ButtonSize) => {
    return styles[size];
};

/** Base CSS module class name for split button container sizing. */
export const SplitButtonVariantBase = styles["size"];

/** Base CSS module class name for the primary action button part of a split button. */
export const SplitButtonPrimaryBase = styles["primary"];

/** Base CSS module class name for the menu trigger button part of a split button. */
export const SplitButtonTriggerBase = styles["trigger"];
