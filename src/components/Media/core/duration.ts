/**
 * Formats a duration in seconds into a standard digital clock time string (`mm:ss` or `hh:mm:ss`).
 *
 * Non-finite, negative, or `NaN` values are safely clamped to zero (`"00:00"`).
 *
 * @param seconds - Duration or elapsed time in seconds.
 * @returns Formatted time string, formatted as `mm:ss` (e.g. `"03:45"`) or `hh:mm:ss` (e.g. `"01:15:30"`) when exceeding 1 hour.
 *
 * @example
 * ```ts
 * formatTime(45); // "00:45"
 * formatTime(125); // "02:05"
 * formatTime(3665); // "01:01:05"
 * formatTime(NaN); // "00:00"
 * ```
 */
export function formatTime(seconds: number): string {
    // NaN / Infinity / negatives -> 0
    const total =
        Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;

    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;

    return (h > 0 ? [h, m, s] : [m, s])
        .map((n) => String(n).padStart(2, "0"))
        .join(":");
}
