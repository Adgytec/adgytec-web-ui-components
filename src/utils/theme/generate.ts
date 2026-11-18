import {
    argbFromHex,
    blueFromArgb,
    DynamicScheme,
    greenFromArgb,
    Hct,
    redFromArgb,
    type Variant,
} from "@material/material-color-utilities";

/**
 * Mapping of Material Design 3 CSS custom property color role names (kebab-case)
 * to the corresponding property getters on {@link DynamicScheme}.
 */
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

/**
 * Converts an ARGB integer into modern CSS `rgb(r g b)` space-separated string syntax.
 *
 * @param argb - Numeric ARGB color value.
 * @returns Modern CSS `rgb(r g b)` string.
 */
function toCssRgb(argb: number): string {
    return `rgb(${redFromArgb(argb)} ${greenFromArgb(argb)} ${blueFromArgb(argb)})`;
}

/**
 * Injects calculated Material Design 3 color palette CSS custom properties (`--md-sys-color-*`)
 * and the root `color-scheme` property onto the target element.
 *
 * @param scheme - The generated {@link DynamicScheme} instance containing computed color values.
 * @param target - Optional DOM element to receive CSS properties (defaults to `document.body` if defined).
 */
function applyScheme(scheme: DynamicScheme, target?: HTMLElement | null) {
    const el =
        target ?? (typeof document !== "undefined" ? document.body : null);

    if (!el) {
        return;
    }

    el.style.setProperty("color-scheme", scheme.isDark ? "dark" : "light");

    for (const [token, property] of Object.entries(colorRoles)) {
        const color = scheme[property as keyof DynamicScheme] as number;

        el.style.setProperty(`--md-sys-color-${token}`, toCssRgb(color));
    }
}

/**
 * Parameters for generating and applying a dynamic Material Design 3 color theme.
 */
export type GenerateThemeOptions = {
    /**
     * Seed color in hexadecimal format used to anchor the dynamic color scheme (e.g. `"#00ADEE"`).
     */
    sourceColor: string;

    /**
     * Contrast level adjustment multiplier (`-1.0` to `1.0`, where `0.0` is standard contrast).
     */
    contrast: number;

    /**
     * Dynamic scheme variant algorithm from Material Color Utilities
     * (e.g. `Variant.VIBRANT`, `Variant.EXPRESSIVE`, `Variant.TONAL_SPOT`).
     */
    variant: Variant;

    /**
     * Whether to generate dark mode (`true`) or light mode (`false`) colors.
     */
    isDark: boolean;

    /**
     * Optional target DOM element onto which the CSS custom properties and `color-scheme` will be injected.
     * Defaults to `document.body` if available in the runtime environment.
     *
     * In SSR / Node.js environments where `document` is undefined, omitting this option will safely no-op.
     *
     * @default document.body
     */
    target?: HTMLElement | null;
};

/**
 * Computes a Material Design 3 {@link DynamicScheme} from the provided options and injects
 * all corresponding `--md-sys-color-*` CSS variables onto the target element (defaults to `document.body`).
 *
 * This function can be called standalone outside of React to immediately apply a dynamic theme.
 * Safe for execution in Server-Side Rendering (SSR) environments.
 *
 * @param options - Configuration options defining seed color, contrast, variant, dark mode, and optional target element.
 *
 * @example
 * ```ts
 * import { GenerateTheme, COLOR_ADGYTEC_BLUE } from "@adgytec/web-ui-components";
 * import { Variant } from "@material/material-color-utilities";
 *
 * GenerateTheme({
 *     sourceColor: COLOR_ADGYTEC_BLUE,
 *     contrast: 0,
 *     variant: Variant.VIBRANT,
 *     isDark: false,
 * });
 * ```
 */
export function GenerateTheme({
    sourceColor,
    contrast,
    variant,
    isDark,
    target,
}: GenerateThemeOptions) {
    const scheme = new DynamicScheme({
        sourceColorHct: Hct.fromInt(argbFromHex(sourceColor)),
        contrastLevel: contrast,
        variant: variant,
        isDark: isDark,
        specVersion: "2025",
        platform: "phone",
    });
    applyScheme(scheme, target);
}
