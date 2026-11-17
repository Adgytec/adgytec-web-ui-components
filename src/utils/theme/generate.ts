import {
    argbFromHex,
    blueFromArgb,
    DynamicScheme,
    greenFromArgb,
    Hct,
    redFromArgb,
    type Variant,
} from "@material/material-color-utilities";

const colorRoles = {
    primary: "primary",
    "on-primary": "onPrimary",
    "primary-container": "primaryContainer",
    "on-primary-container": "onPrimaryContainer",

    secondary: "secondary",
    "on-secondary": "onSecondary",
    "secondary-container": "secondaryContainer",
    "on-secondary-container": "onSecondaryContainer",

    tertiary: "tertiary",
    "on-tertiary": "onTertiary",
    "tertiary-container": "tertiaryContainer",
    "on-tertiary-container": "onTertiaryContainer",

    error: "error",
    "on-error": "onError",
    "error-container": "errorContainer",
    "on-error-container": "onErrorContainer",

    background: "background",
    "on-background": "onBackground",

    surface: "surface",
    "surface-tint": "surfaceTint",
    "on-surface": "onSurface",
    "surface-variant": "surfaceVariant",
    "on-surface-variant": "onSurfaceVariant",

    outline: "outline",
    "outline-variant": "outlineVariant",

    shadow: "shadow",
    scrim: "scrim",

    "inverse-surface": "inverseSurface",
    "inverse-on-surface": "inverseOnSurface",
    "inverse-primary": "inversePrimary",

    "primary-fixed": "primaryFixed",
    "on-primary-fixed": "onPrimaryFixed",
    "primary-fixed-dim": "primaryFixedDim",
    "on-primary-fixed-variant": "onPrimaryFixedVariant",

    "secondary-fixed": "secondaryFixed",
    "on-secondary-fixed": "onSecondaryFixed",
    "secondary-fixed-dim": "secondaryFixedDim",
    "on-secondary-fixed-variant": "onSecondaryFixedVariant",

    "tertiary-fixed": "tertiaryFixed",
    "on-tertiary-fixed": "onTertiaryFixed",
    "tertiary-fixed-dim": "tertiaryFixedDim",
    "on-tertiary-fixed-variant": "onTertiaryFixedVariant",

    "surface-dim": "surfaceDim",
    "surface-bright": "surfaceBright",

    "surface-container-lowest": "surfaceContainerLowest",
    "surface-container-low": "surfaceContainerLow",
    "surface-container": "surfaceContainer",
    "surface-container-high": "surfaceContainerHigh",
    "surface-container-highest": "surfaceContainerHighest",
} as const satisfies Record<string, keyof DynamicScheme>;

function toCssRgb(argb: number): string {
    return `rgb(${redFromArgb(argb)} ${greenFromArgb(argb)} ${blueFromArgb(argb)})`;
}

function applyScheme(scheme: DynamicScheme) {
    const body = document.body;

    body.style.setProperty("color-scheme", scheme.isDark ? "dark" : "light");

    for (const [token, property] of Object.entries(colorRoles)) {
        const color = scheme[property as keyof DynamicScheme] as number;

        body.style.setProperty(`--md-sys-color-${token}`, toCssRgb(color));
    }
}

export type GenerateThemeOptions = {
    sourceColor: string;
    contrast: number;
    variant: Variant;
    isDark: boolean;
};

export function GenerateTheme({
    sourceColor,
    contrast,
    variant,
    isDark,
}: GenerateThemeOptions) {
    const scheme = new DynamicScheme({
        sourceColorHct: Hct.fromInt(argbFromHex(sourceColor)),
        contrastLevel: contrast,
        variant: variant,
        isDark: isDark,
        specVersion: "2025",
        platform: "phone",
    });
    applyScheme(scheme);
}
