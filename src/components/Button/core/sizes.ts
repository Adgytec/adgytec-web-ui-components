import { typography } from "@/utils/typography";

export type ButtonSize =
    | "extra-small"
    | "small"
    | "medium"
    | "large"
    | "extra-large";

export const ButtonIconSizeMapping: Record<ButtonSize, number> = {
    "extra-small": 20,
    small: 20,
    medium: 24,
    large: 32,
    "extra-large": 40,
} as const;

export const IconButtonIconSizeMapping: Record<ButtonSize, number> = {
    "extra-small": 20,
    small: 24,
    medium: 24,
    large: 32,
    "extra-large": 40,
} as const;

export const ButtonLabelTextMapping: Record<ButtonSize, string> = {
    "extra-small": typography.labelLarge,
    small: typography.labelLarge,
    medium: typography.bodyLargeEmphasized,
    large: typography.headlineSmall,
    "extra-large": typography.headlineLarge,
} as const;
