import type { TypographyVariant } from "./base";
import type { FluidTypographyVariant } from "./fluid";

/**
 * Universal typography type representing any valid typography CSS class name in the design system.
 *
 * Combines both standard Material Design 3 variants ({@link TypographyVariant}) and responsive fluid variants ({@link FluidTypographyVariant}).
 * Commonly used across component props that allow customizable typography styling (e.g. `labelTypography`, `titleTypography`, `panelTypography`).
 *
 * @example
 * ```tsx
 * import type { Typography } from '@/utils';
 *
 * interface CustomHeaderProps {
 *     title: string;
 *     titleTypography?: Typography;
 * }
 * ```
 */
export type Typography = TypographyVariant | FluidTypographyVariant;
