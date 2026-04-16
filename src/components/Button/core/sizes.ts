import { typography } from "@/utils/typography";

export type ButtonSize =
    | "extra-small"
    | "small"
    | "medium"
    | "large"
    | "extra-large";

export const IconSizeMapping: Record<ButtonSize, number> = {
    "extra-small": 20,
    small: 20,
} as const;

export const IconButtonSizeMapping: Record<ButtonSize, number> = {
    "extra-small": 20,
    small: 24,
} as const;

export const LabelTextMapping: Record<ButtonSize, string> = {
    "extra-small": typography.labelLarge,
    small: typography.labelLarge,
} as const;
