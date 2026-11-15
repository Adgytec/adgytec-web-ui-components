// using claude

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const PRIMARY = "var(--md-primary, #6750a4)";
const TRACK = "var(--md-track, #e8def8)";
const clamp01 = (n: number) =>
    Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 0;
const ampFactor = (p: number) =>
    Math.max(0, Math.min(1, p / 0.1, (1 - p) / 0.05));

// one rAF loop: wave phase (px) + smoothed progress value
function useWavyClock(target: number, speed: number) {
    const r = useRef({ v: target, phase: 0, t: 0, target });
    r.current.target = target;
    const [s, setS] = useState({ v: target, phase: 0 });
    useEffect(() => {
        const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
        let raf = 0;
        r.current.t = performance.now();
        const tick = (now: number) => {
            const c = r.current;
            const dt = Math.min(0.05, (now - c.t) / 1000);
            c.t = now;
            if (!reduce) c.phase += speed * dt;
            c.v += (c.target - c.v) * (reduce ? 1 : 1 - Math.exp(-dt * 12)); // smoothing
            setS({ v: c.v, phase: c.phase });
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [speed]);
    return s;
}

export function LinearProgress({
    value: raw,
    max = 100,
    wavy = true,
    wavelength = 40,
    amp = 3,
    sw = 4,
    gap = 4,
    speed = 40,
}: {
    value: number;
    max?: number;
    wavy?: boolean;
    wavelength?: number;
    amp?: number;
    sw?: number;
    gap?: number;
    speed?: number;
}) {
    const { v, phase } = useWavyClock(clamp01(raw / max), speed);

    const box = useRef<HTMLDivElement>(null);
    const [w, setW] = useState(0);
    useLayoutEffect(() => {
        const el = box.current;
        if (!el) return;

        setW(el.clientWidth);
        const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const H = 2 * amp + sw,
        cy = H / 2;
    const x0 = sw / 2,
        x1 = w - sw / 2;
    const a = wavy ? amp * ampFactor(v) : 0;
    const half = (gap + sw) / 2;
    const split = x0 + (x1 - x0) * v;
    const end = v >= 0.999 ? x1 : split - half;

    let active = "";
    if (w > 0 && end > x0) {
        const y = (x: number) =>
            cy + a * Math.sin((2 * Math.PI * (x - phase)) / wavelength);
        let d = `M${x0},${y(x0)}`;
        for (let x = x0 + 2; x < end; x += 2) d += `L${x},${y(x)}`;
        active = `${d}L${end},${y(end)}`;
    }
    const trackStart = Math.max(split + half, x0);

    return (
        <div
            ref={box}
            style={{ width: "100%", height: H }}
            role="progressbar"
            aria-valuenow={Math.round(v * 100)}
        >
            {w > 0 && (
                <svg
                    aria-label="sample"
                    width={w}
                    height={H}
                    style={{ display: "block", overflow: "visible" }}
                >
                    {v < 0.999 && trackStart < x1 && (
                        <line
                            x1={trackStart}
                            x2={x1}
                            y1={cy}
                            y2={cy}
                            stroke={TRACK}
                            strokeWidth={sw}
                            strokeLinecap="round"
                        />
                    )}
                    {v < 0.999 && (
                        <circle cx={x1} cy={cy} r={sw / 2} fill={PRIMARY} />
                    )}
                    {active && (
                        <path
                            d={active}
                            fill="none"
                            stroke={PRIMARY}
                            strokeWidth={sw}
                            strokeLinecap="round"
                        />
                    )}
                </svg>
            )}
        </div>
    );
}

// polar path from angle a → b; radius = R + f(θ)
function arc(
    c: number,
    R: number,
    a: number,
    b: number,
    f: (t: number) => number
) {
    const steps = Math.max(2, Math.ceil(((b - a) * R) / 1.5));
    let d = "";
    for (let i = 0; i <= steps; i++) {
        const t = a + ((b - a) * i) / steps;
        const r = R + f(t);
        d += `${i ? "L" : "M"}${c + r * Math.cos(t)},${c + r * Math.sin(t)}`;
    }
    return d;
}

export function CircularProgress({
    value: raw,
    max = 100,
    size = 48,
    wavy = true,
    wavelength = 15,
    amp = 1.6,
    sw = 4,
    gap = 4,
    speed = 100,
}: {
    value: number;
    max?: number;
    size?: number;
    wavy?: boolean;
    wavelength?: number;
    amp?: number;
    sw?: number;
    gap?: number;
    speed?: number;
}) {
    const { v, phase } = useWavyClock(clamp01(raw / max), speed);

    const c = size / 2;
    // reserve room for the wave so flat/wavy don't change the ring size
    const R = c - sw / 2 - amp;
    // whole number of waves so the wave closes cleanly around the ring
    const n = Math.max(1, Math.round((2 * Math.PI * R) / wavelength));
    const a = wavy ? amp * ampFactor(v) : 0;

    const a0 = -Math.PI / 2; // start at 12 o'clock
    const full = v >= 0.999;
    const gapA = (gap + sw) / R; // gap measured between cap edges
    const sweep = 2 * Math.PI * v;
    const wave = (t: number) => a * Math.sin(n * t - phase / R);

    let active = "";
    let track = "";
    if (full) {
        active = arc(c, R, a0, a0 + 2 * Math.PI, wave);
    } else {
        // gap is centered on the progress position, like the linear one
        const aStart = a0 + gapA / 2;
        const aEnd = a0 + sweep - gapA / 2;
        if (aEnd > aStart) active = arc(c, R, aStart, aEnd, wave);

        const tStart = a0 + sweep + gapA / 2;
        const tEnd = a0 + 2 * Math.PI - gapA / 2;
        if (tEnd > tStart) track = arc(c, R, tStart, tEnd, () => 0);
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(v * 100)}
            style={{ display: "block" }}
        >
            {track && (
                <path
                    d={track}
                    fill="none"
                    stroke={TRACK}
                    strokeWidth={sw}
                    strokeLinecap="round"
                />
            )}
            {active && (
                <path
                    d={active}
                    fill="none"
                    stroke={PRIMARY}
                    strokeWidth={sw}
                    strokeLinecap="round"
                />
            )}
        </svg>
    );
}

// ---------- shared helpers ----------

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

const CYCLE = 1750; // ms
const e1Head = cubicBezier(0.2, 0, 0.8, 1);
const e1Tail = cubicBezier(0.4, 0, 1, 1);
const e2Head = cubicBezier(0, 0, 0.65, 1);
const e2Tail = cubicBezier(0.1, 0, 0.45, 1);
const seg = (
    t: number,
    delay: number,
    dur: number,
    ease: (x: number) => number
) => ease(clamp01((t - delay) / dur));

// time within the cycle (ms) + wave phase (px)
function useIndeterminateClock(speed: number) {
    const [s, setS] = useState({ t: 0, phase: 0 });
    useEffect(() => {
        const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
        let raf = 0,
            last = performance.now(),
            phase = 0;
        const start = last;
        const tick = (now: number) => {
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            if (!reduce) phase += speed * dt;
            setS({ t: (now - start) % CYCLE, phase });
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [speed]);
    return s;
}

function useWidth() {
    const box = useRef<HTMLDivElement>(null);
    const [w, setW] = useState(0);
    useLayoutEffect(() => {
        const el = box.current;
        if (!el) return;

        setW(el.clientWidth);
        const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);
    return { box, w };
}

// ---------- component ----------

export function LinearIndeterminate({
    wavy = true,
    wavelength = 40,
    amp = 3,
    sw = 4,
    gap = 4,
    speed = 40,
}: {
    wavy?: boolean;
    wavelength?: number;
    amp?: number;
    sw?: number;
    gap?: number;
    speed?: number;
}) {
    const { box, w } = useWidth();
    const { t, phase } = useIndeterminateClock(speed);

    const H = 2 * amp + sw,
        cy = H / 2;
    const x0 = sw / 2,
        x1 = w - sw / 2,
        L = x1 - x0;
    const half = (gap + sw) / 2; // gap measured between cap edges
    const a = wavy ? amp : 0; // full amplitude the whole time

    const y = (x: number) =>
        cy + a * Math.sin((2 * Math.PI * (x - phase)) / wavelength);
    const wavePath = (s: number, e: number) => {
        let d = `M${s},${y(s)}`;
        for (let x = s + 2; x < e; x += 2) d += `L${x},${y(x)}`;
        return `${d}L${e},${y(e)}`;
    };

    // [tail, head] of the two bars, as pixel positions, sorted left → right
    const bars: [number, number][] = (
        [
            [seg(t, 333, 750, e1Tail), seg(t, 0, 750, e1Head)],
            [seg(t, 1267, 533, e2Tail), seg(t, 1000, 567, e2Head)],
        ] as [number, number][]
    )
        .map(([tl, hd]): [number, number] => [x0 + L * tl, x0 + L * hd])
        .filter(([s, e]) => e - s > 0.01)
        .sort((p, q) => p[0] - q[0]);

    // track fills whatever the bars don't cover, with a gap next to each bar
    const track: [number, number][] = [];
    let cursor = x0,
        afterBar = false;
    for (const [s, e] of bars) {
        const from = cursor + (afterBar ? half : 0);
        const to = s - half;
        if (to > from) track.push([from, to]);
        cursor = e;
        afterBar = true;
    }
    {
        const from = cursor + (afterBar ? half : 0);
        if (x1 > from) track.push([from, x1]);
    }

    // inset each bar by half a gap, easing in so it doesn't pop at the track ends
    const drawn = bars
        .map(([s, e]): [number, number] => [
            s + Math.min(half, s - x0),
            e - Math.min(half, x1 - e),
        ])
        .filter(([s, e]) => e > s);

    return (
        <div
            ref={box}
            style={{ width: "100%", height: H }}
            role="progressbar"
            aria-busy="true"
        >
            {w > 0 && (
                <svg
                    aria-label="sample"
                    width={w}
                    height={H}
                    style={{ display: "block", overflow: "visible" }}
                >
                    {track.map(([s, e], _) => (
                        <line
                            key={`t${s * e}-${s / e}`}
                            x1={s}
                            x2={e}
                            y1={cy}
                            y2={cy}
                            stroke={TRACK}
                            strokeWidth={sw}
                            strokeLinecap="round"
                        />
                    ))}
                    {drawn.map(([s, e], _) => (
                        <path
                            key={`b${s * e}-${s / e}`}
                            d={wavePath(s, e)}
                            fill="none"
                            stroke={PRIMARY}
                            strokeWidth={sw}
                            strokeLinecap="round"
                        />
                    ))}
                </svg>
            )}
        </div>
    );
}

// total elapsed ms (no wrap) + wave phase (px)
function useIndeterminateTime(speed: number) {
    const [s, setS] = useState({ ms: 0, phase: 0 });
    useEffect(() => {
        const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
        let raf = 0,
            phase = 0;
        const start = performance.now();
        let last = start;
        const tick = (now: number) => {
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            if (!reduce) phase += speed * dt;
            setS({ ms: now - start, phase });
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [speed]);
    return s;
}

const circEase = cubicBezier(0.4, 0, 0.2, 1);

export function CircularIndeterminate({
    size = 48,
    wavy = true,
    wavelength = 15,
    amp = 1.6,
    sw = 4,
    gap = 4,
    speed = 30,
    showTrack = true,
    cycle = 1333, // ms per grow + shrink
    minLen = 0.12, // arc length in turns (shortest)
    maxLen = 0.75, // arc length in turns (longest)
    spin = 0.625, // constant rotation, turns per second
}: {
    size?: number;
    wavy?: boolean;
    wavelength?: number;
    amp?: number;
    sw?: number;
    gap?: number;
    speed?: number;
    showTrack?: boolean;
    cycle?: number;
    minLen?: number;
    maxLen?: number;
    spin?: number;
}) {
    const { ms, phase } = useIndeterminateTime(speed);

    const c = size / 2;
    const R = c - sw / 2 - amp;
    const n = Math.max(1, Math.round((2 * Math.PI * R) / wavelength));
    const a = wavy ? amp : 0; // full amplitude the whole time
    const gapA = showTrack ? (gap + sw) / R : 0;
    const TAU = 2 * Math.PI;

    // arc position in turns: grow (head moves), then shrink (tail moves)
    const k = Math.floor(ms / cycle);
    const u = (ms % cycle) / cycle;
    const step = maxLen - minLen;
    const T0 = k * step;
    let tailT: number, headT: number;
    if (u < 0.5) {
        tailT = T0;
        headT = T0 + minLen + step * circEase(u / 0.5);
    } else {
        tailT = T0 + step * circEase((u - 0.5) / 0.5);
        headT = T0 + maxLen;
    }

    const rot = (ms / 1000) * spin; // turns
    const base = -Math.PI / 2 + rot * TAU;
    const tail = base + tailT * TAU;
    const head = base + headT * TAU;

    const wave = (t: number) => a * Math.sin(n * t - phase / R);

    const aS = tail + gapA / 2;
    const aE = head - gapA / 2;
    const active = aE > aS ? arc(c, R, aS, aE, wave) : "";

    let track = "";
    if (showTrack) {
        const tS = head + gapA / 2;
        const tE = tail + TAU - gapA / 2;
        if (tE > tS) track = arc(c, R, tS, tE, () => 0);
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            role="progressbar"
            aria-busy="true"
            style={{ display: "block" }}
        >
            {track && (
                <path
                    d={track}
                    fill="none"
                    stroke={TRACK}
                    strokeWidth={sw}
                    strokeLinecap="round"
                />
            )}
            {active && (
                <path
                    d={active}
                    fill="none"
                    stroke={PRIMARY}
                    strokeWidth={sw}
                    strokeLinecap="round"
                />
            )}
        </svg>
    );
}
