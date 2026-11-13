import styles from "./fab.module.css";
import type { FABVariants } from "./variants";

/**
 * Resolves the CSS module class name for a given FAB variant.
 *
 * @param variant - The semantic FAB variant ("primary", "secondary", or "tertiary").
 * @returns The CSS module class name corresponding to the variant.
 */
export const fabVariantConfig = (variant: FABVariants) => {
    return styles[variant];
};

/**
 * Base CSS module class name applied to all Floating Action Buttons.
 */
export const fabVariantBase = styles["fab"];
