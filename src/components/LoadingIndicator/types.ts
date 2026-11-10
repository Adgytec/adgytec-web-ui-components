/**
 * Props for the {@link LoadingIndicator} component.
 */
export interface LoadingIndicatorProps {
    /**
     * Visual containment style of the indicator.
     * - `"default"`: Uncontained indicator with a transparent container background.
     * - `"contained"`: Contained indicator rendered within a filled circular container.
     *
     * @default "default"
     */
    containment?: "default" | "contained";

    /**
     * The size of the loading indicator container in pixels (dp).
     *
     * Clamped between {@link MinLoadingIndicatorSize} (`24`) and {@link MaxLoadingIndicatorSize} (`240`).
     *
     * @default DefaultLoadingIndicatorSize (48)
     */
    size?: number;
}

/**
 * Minimum permitted container size for the loading indicator in pixels.
 */
export const MinLoadingIndicatorSize = 24;

/**
 * Default container size for the loading indicator in pixels.
 */
export const DefaultLoadingIndicatorSize = 48;

/**
 * Maximum permitted container size for the loading indicator in pixels.
 */
export const MaxLoadingIndicatorSize = 240;

/**
 * Clamps and rounds a given size value within the allowed bounds
 * (between {@link MinLoadingIndicatorSize} and {@link MaxLoadingIndicatorSize}).
 * If the value is `NaN`, returns {@link DefaultLoadingIndicatorSize}.
 *
 * @param size - The requested size in pixels.
 * @returns The sanitized, clamped size in pixels.
 */
export function getUsableIndicatorSize(size: number) {
    if (Number.isNaN(size)) {
        return DefaultLoadingIndicatorSize;
    }

    return Math.min(
        MaxLoadingIndicatorSize,
        Math.max(MinLoadingIndicatorSize, Math.round(size))
    );
}
