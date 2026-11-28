import { useSyncExternalStore } from "react";

let cached: boolean | undefined;

/**
 * True if the browser lets scripts change media volume.
 * iOS Safari ignores `volume` writes (the getter keeps returning 1).
 */
export function canSetVolume(): boolean {
    if (cached !== undefined) return cached;

    // SSR: assume yes and don't cache, so the real check runs on the client
    if (typeof Audio === "undefined") return true;

    // Detached element with no src: loads nothing, never touches the DOM
    const probe = new Audio();
    probe.volume = 0.5;
    cached = Math.abs(probe.volume - 0.5) < 0.01;
    return cached;
}

// The answer never changes at runtime, so there is nothing to subscribe to
const subscribe = () => () => {};

/**
 * Hydration-safe wrapper: the server and the first client render both say
 * `true`, then React re-renders with the real value if it differs.
 */
export function useCanSetVolume(): boolean {
    return useSyncExternalStore(subscribe, canSetVolume, () => true);
}
