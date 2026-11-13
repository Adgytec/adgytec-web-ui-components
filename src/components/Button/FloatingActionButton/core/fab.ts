import styles from "./fab.module.css";
import type { FABVariants } from "./variants";

export const fabVariantConfig = (variant: FABVariants) => {
    return styles[variant];
};

export const fabVariantBase = styles["fab"];
