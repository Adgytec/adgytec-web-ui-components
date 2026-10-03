/**
 * Fluid typography variants that scale smoothly between minimum and maximum viewport sizes.
 *
 * Implemented using CSS `clamp()` to dynamically interpolate font size and line height
 * according to screen width without jarring breakpoint jumps.
 *
 * Available for Display and Headline roles where responsive scaling produces the most
 * impactful visual balance across mobile, tablet, and desktop viewports.
 *
 * @example
 * ```tsx
 * import { fluidTypography } from '@adgytec/web-ui-components';
 * import clsx from 'clsx';
 *
 * function HeroBanner() {
 *     return (
 *         <h1 className={clsx(fluidTypography.displayLarge)}>
 *             Fluid Responsive Title
 *         </h1>
 *     );
 * }
 * ```
 */
export const fluidTypography = {
    // 1. Display

    /** Large fluid display style smoothly scaling with viewport width. */
    displayLarge: "typography-display-large-fluid",
    /** Medium fluid display style smoothly scaling with viewport width. */
    displayMedium: "typography-display-medium-fluid",
    /** Small fluid display style smoothly scaling with viewport width. */
    displaySmall: "typography-display-small-fluid",

    // 2. Headline

    /** Large fluid headline style smoothly scaling with viewport width. */
    headlineLarge: "typography-headline-large-fluid",
    /** Medium fluid headline style smoothly scaling with viewport width. */
    headlineMedium: "typography-headline-medium-fluid",
    /** Small fluid headline style smoothly scaling with viewport width. */
    headlineSmall: "typography-headline-small-fluid",
} as const;

/**
 * Union of all fluid typography CSS class name values in {@link fluidTypography}.
 */
export type FluidTypographyVariant =
    (typeof fluidTypography)[keyof typeof fluidTypography];

/**
 * Union of all fluid typography role keys in {@link fluidTypography}.
 */
export type FluidTypographyKey = keyof typeof fluidTypography;
