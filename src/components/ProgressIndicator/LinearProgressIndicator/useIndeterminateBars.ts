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

const CYCLE = 2600; // ms
const BASE = 1750; // the timings below are on this scale
const B2_SHIFT = 750; // bar 2 starts this long after bar 1

const e1Head = cubicBezier(0.2, 0, 0.8, 1);
const e1Tail = cubicBezier(0.4, 0, 0.6, 1);

const seg = (
    t: number,
    delay: number,
    dur: number,
    ease: (x: number) => number
) => ease(clamp01((t - delay) / dur));

// [tail, head] for a bar that starts at t = 0
const bar = (t: number): [number, number] => [
    seg(t, 333, 750, e1Tail),
    seg(t, 0, 750, e1Head),
];

// [tail, head] of each bar, as fractions 0..1 of the track
export type Bars = { b1: [number, number]; b2: [number, number] };

export function useIndeterminateBars(): Bars {
    const [bars, setBars] = useState<Bars>({ b1: [0, 0], b2: [0, 0] });

    useEffect(() => {
        let raf = 0;
        const start = performance.now();
        const tick = (now: number) => {
            const t = (((now - start) % CYCLE) / CYCLE) * BASE;
            const t2 = (t - B2_SHIFT + BASE) % BASE;
            setBars({ b1: bar(t), b2: bar(t2) });
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
