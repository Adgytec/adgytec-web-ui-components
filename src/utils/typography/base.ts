export const typography = {
    displayLarge: "typography-display-large",
    displayLargeEmphasized: "typography-display-large-emphasized",

    displayMedium: "typography-display-medium",
    displayMediumEmphasized: "typography-display-medium-emphasized",

    displaySmall: "typography-display-small",
    displaySmallEmphasized: "typography-display-small-emphasized",

    headlineLarge: "typography-headline-large",
    headlineLargeEmphasized: "typography-headline-large-emphasized",

    headlineMedium: "typography-headline-medium",
    headlineMediumEmphasized: "typography-headline-medium-emphasized",

    headlineSmall: "typography-headline-small",
    headlineSmallEmphasized: "typography-headline-small-emphasized",

    titleLarge: "typography-title-large",
    titleLargeEmphasized: "typography-title-large-emphasized",

    titleMedium: "typography-title-medium",
    titleMediumEmphasized: "typography-title-medium-emphasized",

    titleSmall: "typography-title-small",
    titleSmallEmphasized: "typography-title-small-emphasized",

    bodyLarge: "typography-body-large",
    bodyLargeEmphasized: "typography-body-large-emphasized",

    bodyMedium: "typography-body-medium",
    bodyMediumEmphasized: "typography-body-medium-emphasized",

    bodySmall: "typography-body-small",
    bodySmallEmphasized: "typography-body-small-emphasized",

    labelLarge: "typography-label-large",
    labelLargeEmphasized: "typography-label-large-emphasized",

    labelMedium: "typography-label-medium",
    labelMediumEmphasized: "typography-label-medium-emphasized",

    labelSmall: "typography-label-small",
    labelSmallEmphasized: "typography-label-small-emphasized",
} as const;

export type TypographyVariant = (typeof typography)[keyof typeof typography];
