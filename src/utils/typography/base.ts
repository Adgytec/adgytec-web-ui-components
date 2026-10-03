/**
 * Standard typography variants based on Material Design 3 guidelines.
 *
 * Maps typography roles to pre-defined CSS class names configuring font-family,
 * font-size, line-height, letter-spacing, and font-weight.
 *
 * Each role is available in two forms:
 * - **Standard**: The default type scale definition.
 * - **Emphasized**: A heavier font-weight variant (e.g., medium/semi-bold/bold) for emphasis.
 *
 * ### Categories:
 * - **Display**: Large, expressive short text (e.g. hero stats, numbers).
 * - **Headline**: High-emphasis titles for main screens or sections.
 * - **Title**: Medium-emphasis headers for cards, dialogs, and list items.
 * - **Body**: Longer passages, descriptive copy, and form inputs.
 * - **Label**: Compact utility styles for buttons, chips, tabs, and form field captions.
 *
 * @example
 * ```tsx
 * import { typography } from '@adgytec/web-ui-components';
 * import clsx from 'clsx';
 *
 * function Heading() {
 *     return (
 *         <h1 className={clsx(typography.headlineLarge)}>
 *             Dashboard Overview
 *         </h1>
 *     );
 * }
 * ```
 */
export const typography = {
    // 1. Display

    /** Large display style (57px) for high-impact, short hero text. */
    displayLarge: "typography-display-large",
    /** Emphasized (heavier weight) variant of `displayLarge`. */
    displayLargeEmphasized: "typography-display-large-emphasized",

    /** Medium display style (45px) for prominent short text. */
    displayMedium: "typography-display-medium",
    /** Emphasized (heavier weight) variant of `displayMedium`. */
    displayMediumEmphasized: "typography-display-medium-emphasized",

    /** Small display style (36px) for compact hero headings. */
    displaySmall: "typography-display-small",
    /** Emphasized (heavier weight) variant of `displaySmall`. */
    displaySmallEmphasized: "typography-display-small-emphasized",

    // 2. Headline

    /** Large headline style (32px) for primary screen and section titles. */
    headlineLarge: "typography-headline-large",
    /** Emphasized (heavier weight) variant of `headlineLarge`. */
    headlineLargeEmphasized: "typography-headline-large-emphasized",

    /** Medium headline style (28px) for secondary screen titles. */
    headlineMedium: "typography-headline-medium",
    /** Emphasized (heavier weight) variant of `headlineMedium`. */
    headlineMediumEmphasized: "typography-headline-medium-emphasized",

    /** Small headline style (24px) for tertiary screen titles. */
    headlineSmall: "typography-headline-small",
    /** Emphasized (heavier weight) variant of `headlineSmall`. */
    headlineSmallEmphasized: "typography-headline-small-emphasized",

    // 3. Title

    /** Large title style (22px) for top-level card titles, app bars, and dialog headers. */
    titleLarge: "typography-title-large",
    /** Emphasized (heavier weight) variant of `titleLarge`. */
    titleLargeEmphasized: "typography-title-large-emphasized",

    /** Medium title style (16px) for section headers and prominent list items. */
    titleMedium: "typography-title-medium",
    /** Emphasized (heavier weight) variant of `titleMedium`. */
    titleMediumEmphasized: "typography-title-medium-emphasized",

    /** Small title style (14px) for compact card headers, subheads, and tabs. */
    titleSmall: "typography-title-small",
    /** Emphasized (heavier weight) variant of `titleSmall`. */
    titleSmallEmphasized: "typography-title-small-emphasized",

    // 4. Body

    /** Large body style (16px) for primary body text, article paragraphs, and form inputs. */
    bodyLarge: "typography-body-large",
    /** Emphasized (heavier weight) variant of `bodyLarge`. */
    bodyLargeEmphasized: "typography-body-large-emphasized",

    /** Medium body style (14px) for secondary descriptions and supporting text. */
    bodyMedium: "typography-body-medium",
    /** Emphasized (heavier weight) variant of `bodyMedium`. */
    bodyMediumEmphasized: "typography-body-medium-emphasized",

    /** Small body style (12px) for compact descriptions, disclaimers, and legal text. */
    bodySmall: "typography-body-small",
    /** Emphasized (heavier weight) variant of `bodySmall`. */
    bodySmallEmphasized: "typography-body-small-emphasized",

    // 5. Label

    /** Large label style (14px) for buttons, navigation items, chips, and field labels. */
    labelLarge: "typography-label-large",
    /** Emphasized (heavier weight) variant of `labelLarge`. */
    labelLargeEmphasized: "typography-label-large-emphasized",

    /** Medium label style (12px) for helper text, tooltips, tags, and character counts. */
    labelMedium: "typography-label-medium",
    /** Emphasized (heavier weight) variant of `labelMedium`. */
    labelMediumEmphasized: "typography-label-medium-emphasized",

    /** Small label style (11px) for overline text, timestamps, and compact metadata. */
    labelSmall: "typography-label-small",
    /** Emphasized (heavier weight) variant of `labelSmall`. */
    labelSmallEmphasized: "typography-label-small-emphasized",
} as const;

/**
 * Union of all standard typography CSS class name values in {@link typography}.
 */
export type TypographyVariant = (typeof typography)[keyof typeof typography];

/**
 * Union of all standard typography role keys in {@link typography}.
 */
export type TypographyKey = keyof typeof typography;
