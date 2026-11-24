import type { FieldVariant } from "../core";
import styles from "./field.module.css";

export const FieldVariantStyles = (variant: FieldVariant) => {
    return styles[variant];
};

export const FieldStyle = styles["field"];
