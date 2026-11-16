import { useEffect, useLayoutEffect, useRef, useState } from "react";

function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
    const cx = 3 * x1,
        bx = 3 * (x2 - x1) - cx,
        ax = 1 - cx - bx;
    const cy = 3 * y1,
        by = 3 * (y2 - y1) - cy,
        ay = 1 - cy - by;
    const xx = (s: number) => ((ax * s + bx) * s + cx) * s;
    const yy = (s: number) => ((ay * s + by) * s + cy) * s;
    return (x: number) => {
        if (x <= 0) return 0;
        if (x >= 1) return 1;
        let lo = 0,
            hi = 1,
            s = x;
        for (let i = 0; i < 20; i++) {
            s = (lo + hi) / 2;
            if (xx(s) < x) lo = s;
            else hi = s;
        }
        return yy(s);
    };
}

export const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const CYCLE = 2600; // ms, keep equal to --_duration in the CSS
const e1Head = cubicBezier(0.2, 0, 0.8, 1);
const e1Tail = cubicBezier(0.4, 0, 0.6, 1);
const e2Head = cubicBezier(0, 0, 0.65, 1);
const e2Tail = cubicBezier(0.3, 0, 0.5, 1);
const seg = (
    t: number,
    delay: number,
    dur: number,
    ease: (x: number) => number
) => ease(clamp01((t - delay) / dur));

// [tail, head] of each bar, as fractions 0..1 of the track
export type Bars = { b1: [number, number]; b2: [number, number] };

export function useIndeterminateBars(): Bars {
    const [bars, setBars] = useState<Bars>({ b1: [0, 0], b2: [0, 0] });

    useEffect(() => {
        let raf = 0;
        const start = performance.now();
        const tick = (now: number) => {
            const t = (((now - start) % CYCLE) / CYCLE) * 1750;
            setBars({
                b1: [seg(t, 333, 750, e1Tail), seg(t, 0, 750, e1Head)],
                b2: [seg(t, 1267, 533, e2Tail), seg(t, 1000, 567, e2Head)],
            });
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    return bars;
}

export function useWidth() {
    const ref = useRef<HTMLDivElement>(null);
    const [w, setW] = useState(0);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;
        setW(el.clientWidth);
        const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return { ref, w };
}
