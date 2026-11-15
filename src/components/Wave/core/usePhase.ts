import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

/**
 * Hook that calculates a continuously updating phase offset driven by `requestAnimationFrame`.
 *
 * When `speed` is `0` or when reduced motion is preferred (`prefers-reduced-motion: reduce`),
 * the animation loop is skipped and returns a static phase offset of `0`.
 *
 * @param speed - Propagation speed of the wave animation in units per second.
 * @returns The current animated phase offset in units.
 */
export function usePhase(speed: number) {
    const prefersReducedMotion = useMediaQuery(
        "(prefers-reduced-motion: reduce)"
    );
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (speed === 0 || prefersReducedMotion) return;

        let raf = 0;
        const start = performance.now();
        const tick = (now: number) => {
            setPhase(((now - start) / 1000) * speed);
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [speed, prefersReducedMotion]);

    return prefersReducedMotion ? 0 : phase;
}
