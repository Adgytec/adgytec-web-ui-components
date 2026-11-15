/**
 * Stroke thickness variants for progress indicators.
 *
 * - `"default"`: Standard 4px stroke thickness.
 * - `"thick"`: Prominent 8px stroke thickness.
 */
export type ProgressIndicatorThickness = "default" | "thick";

/**
 * Maps each {@link ProgressIndicatorThickness} variant to its corresponding stroke width in pixels.
 */
export const ProgressIndicatorThicknessToStrokeWidth: Record<
    ProgressIndicatorThickness,
    number
> = {
    default: 4,
    thick: 8,
};
