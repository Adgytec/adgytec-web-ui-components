import type { TypographyVariant } from "./base";

export const fluidTypography: Partial<Record<TypographyVariant, string>> = {
    displayLarge: "typography-display-large-fluid",
    displayMedium: "typography-display-medium-fluid",
    displaySmall: "typography-display-small-fluid",

    headlineLarge: "typography-headline-large-fluid",
    headlineMedium: "typography-headline-medium-fluid",
    headlineSmall: "typography-headline-small-fluid",
} as const;
