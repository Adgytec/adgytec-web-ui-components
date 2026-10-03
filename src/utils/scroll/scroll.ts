/**
 * Options for calculating normalized scroll progress.
 */
export interface ScrollProgressOptions {
    /**
     * Current vertical scroll position of the container in pixels (`element.scrollTop`).
     */
    scrollTop: number;
    /**
     * Total scrollable height of the container content in pixels (`element.scrollHeight`).
     */
    scrollHeight: number;
    /**
     * Inner height of the container viewport in pixels (`element.clientHeight`).
     */
    clientHeight: number;
}

/**
 * Calculates normalized vertical scroll progress as a ratio between `0` (top) and `1` (bottom).
 *
 * Automatically clamped between `0` and `1` to prevent out-of-bounds values caused by
 * elastic over-scrolling / rubber-banding on mobile (iOS/Safari) and trackpads.
 * If the container content is not scrollable (i.e. `scrollHeight <= clientHeight`), returns `0`.
 *
 * @param options - Container dimension and scroll position values.
 * @returns Normalized scroll progress clamped between `0` and `1`.
 *
 * @example
 * ```ts
 * const progress = getScrollProgress({
 *     scrollTop: element.scrollTop,
 *     scrollHeight: element.scrollHeight,
 *     clientHeight: element.clientHeight,
 * });
 * ```
 */
export function getScrollProgress({
    scrollHeight,
    scrollTop,
    clientHeight,
}: ScrollProgressOptions): number {
    const maxScrollTop = scrollHeight - clientHeight;
    if (maxScrollTop <= 0) {
        return 0;
    }
    const rawProgress = scrollTop / maxScrollTop;
    return Math.min(1, Math.max(0, rawProgress));
}

/**
 * Options for calculating vertical scroll position from a normalized progress ratio.
 */
export interface ScrollTopFromProgressOptions {
    /**
     * Normalized scroll progress ratio between `0` and `1`.
     */
    progress: number;
    /**
     * Total scrollable height of the container content in pixels (`element.scrollHeight`).
     */
    scrollHeight: number;
    /**
     * Inner height of the container viewport in pixels (`element.clientHeight`).
     */
    clientHeight: number;
}

/**
 * Calculates the target `scrollTop` in pixels from a normalized scroll progress ratio (`0` to `1`).
 *
 * Commonly used to restore saved scroll positions across renders, layout changes, or navigation state updates.
 * Guarantees a non-negative return value (`>= 0`), and clamps input progress to `[0, 1]`.
 *
 * @param options - Container dimensions and normalized progress value.
 * @returns The vertical scroll offset in pixels (`scrollTop`), guaranteed to be `>= 0`.
 *
 * @example
 * ```ts
 * element.scrollTop = getScrollTopFromProgress({
 *     progress: 0.5,
 *     scrollHeight: element.scrollHeight,
 *     clientHeight: element.clientHeight,
 * });
 * ```
 */
export function getScrollTopFromProgress({
    scrollHeight,
    progress,
    clientHeight,
}: ScrollTopFromProgressOptions): number {
    const maxScrollTop = scrollHeight - clientHeight;
    if (maxScrollTop <= 0) {
        return 0;
    }
    const clampedProgress = Math.min(1, Math.max(0, progress));
    return clampedProgress * maxScrollTop;
}
