import { useEffect, useState } from "react";

export function usePhase(speed: number) {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        if (speed === 0) return;

        let raf = 0;
        const start = performance.now();
        const tick = (now: number) => {
            setPhase(((now - start) / 1000) * speed);
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [speed]);

    return phase;
}
