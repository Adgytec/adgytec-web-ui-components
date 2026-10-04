import { typography } from "@/utils";

/**
 * Height and typography scale variant for the {@link AppBar}.
 *
 * - `"small"`: Standard 64px single-row header with inline headline and actions.
 * - `"medium"`: Two-row header with prominent 36px title in the bottom row.
 * - `"large"`: Expressive two-row header with prominent 44px display title in the bottom row.
 */
export type AppBarSize = "small" | "medium" | "large";

/**
 * Mapping of each {@link AppBarSize} variant to its corresponding typography class name.
 */
export const AppBarHeadlineTypography: Record<AppBarSize, string> = {
    small: typography.titleLarge,
    medium: typography.headlineMedium,
    large: typography.displaySmall,
} as const;

/**
 * Mapping of each {@link AppBarSize} variant to its headline container height (block-size in pixels).
 */
export const AppBarHeadlineBlockSize: Record<AppBarSize, number> = {
    small: 28,
    medium: 36,
    large: 44,
} as const;
