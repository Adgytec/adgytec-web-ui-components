/**
 * Minimum permitted container size for the circular progress indicator in pixels.
 */
export const MinProgressIndicatorSize = 24;

/**
 * Default container size for the circular progress indicator in pixels.
 */
export const DefaultProgressIndicatorSize = 48;

/**
 * Maximum permitted container size for the circular progress indicator in pixels.
 */
export const MaxProgressIndicatorSize = 240;

/**
 * Clamps and rounds a given size value within the allowed progress indicator bounds
 * (between {@link MinProgressIndicatorSize} and {@link MaxProgressIndicatorSize}).
 * If the value is `NaN` or `undefined`, returns {@link DefaultProgressIndicatorSize}.
 *
 * @param size - The requested size in pixels.
 * @returns The sanitized, clamped size in pixels.
 */
export function getUsableProgressIndicatorSize(size?: number): number {
    if (size === undefined || Number.isNaN(size)) {
        return DefaultProgressIndicatorSize;
    }

    return Math.min(
        MaxProgressIndicatorSize,
        Math.max(MinProgressIndicatorSize, Math.round(size))
    );
}
