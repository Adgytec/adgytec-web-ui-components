import type { FieldVariant } from "../core";
import styles from "./field.module.css";

/**
 * Resolves the CSS module class name for a given field variant.
 *
 * @param variant - Visual variant (`"filled"` or `"outlined"`).
 */
export const FieldVariantStyles = (variant: FieldVariant) => {
    return styles[variant];
};

/**
 * Base CSS module class name for the Field container.
 */
export const FieldStyle = styles["field"];
