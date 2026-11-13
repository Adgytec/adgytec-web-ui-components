import { typography } from "@/utils";
import styles from "./size.module.css";

/**
 * Size preset options for Floating Action Buttons.
 * - `"small"`: Compact FAB (40x40 container).
 * - `"medium"`: Default FAB (56x56 container).
 * - `"large"`: Large FAB (96x96 container).
 */
export type FABSizes = "small" | "medium" | "large";

/**
 * Maps each FAB size preset to its corresponding icon dimensions in pixels.
 */
export const FABIconSizeMapping: Record<FABSizes, number> = {
    small: 24,
    medium: 28,
    large: 36,
};

/**
 * Maps each Extended FAB size preset to its corresponding typography class name.
 */
export const ExtendedFABLabelTextMapping: Record<FABSizes, string> = {
    small: typography.titleMedium,
    medium: typography.titleLarge,
    large: typography.headlineSmall,
};

/**
 * Resolves the CSS module class name for a given FAB size preset.
 *
 * @param size - The FAB size preset.
 * @returns The CSS module class name for the size.
 */
export const fabSizeConfig = (size: FABSizes) => {
    return styles[size];
};
