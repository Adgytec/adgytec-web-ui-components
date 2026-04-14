export const typography = {
    displayLarge: "typography-display-large",
    displayMedium: "typography-display-medium",
    displaySmall: "typography-display-small",

    headlineLarge: "typography-headline-large",
    headlineMedium: "typography-headline-medium",
    headlineSmall: "typography-headline-small",

    titleLarge: "typography-title-large",
    titleMedium: "typography-title-medium",
    titleSmall: "typography-title-small",

    bodyLarge: "typography-body-large",
    bodyMedium: "typography-body-medium",
    bodySmall: "typography-body-small",

    labelLarge: "typography-label-large",
    labelMedium: "typography-label-medium",
    labelSmall: "typography-label-small",
} as const;

export type TypographyVariant = keyof typeof typography;
