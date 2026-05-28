import { typography } from "@/utils";

export type AppBarSize = "small" | "medium" | "large";

export const AppBarHeadlineTypography: Record<AppBarSize, string> = {
    small: typography.titleLarge,
    medium: typography.headlineMedium,
    large: typography.displaySmall,
} as const;

export const AppBarHeadlineBlockSize: Record<AppBarSize, number> = {
    small: 28,
    medium: 36,
    large: 44,
} as const;
