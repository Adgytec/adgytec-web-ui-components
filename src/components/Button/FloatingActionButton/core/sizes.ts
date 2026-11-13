import { typography } from "@/utils";
import styles from "./size.module.css";

export type FABSizes = "small" | "medium" | "large";

export const FABIconSizeMapping: Record<FABSizes, number> = {
    small: 24,
    medium: 28,
    large: 36,
};

export const ExtendedFABLabelTextMapping: Record<FABSizes, string> = {
    small: typography.titleMedium,
    medium: typography.titleLarge,
    large: typography.headlineSmall,
};

export const fabSizeConfig = (size: FABSizes) => {
    return styles[size];
};

export const fabSizeBase = styles["size"];
