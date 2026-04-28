import type { ButtonSize } from "../../core";
import styles from "./size.module.css";

export const SplitButtonTriggerIconSize: Record<ButtonSize, number> = {
    "extra-small": 22,
    small: 22,
    medium: 26,
    large: 38,
    "extra-large": 50,
} as const;

export const splitButtonSizeConfig = (size: ButtonSize) => {
    return styles[size];
};

export const SplitButtonVariantBase = styles["size"];
export const SplitButtonVariantTargetSize = styles["block-size"];

export const SplitButtonPrimaryBase = styles["primary"];
export const SplitButtonTriggerBase = styles["trigger"];
