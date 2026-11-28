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
