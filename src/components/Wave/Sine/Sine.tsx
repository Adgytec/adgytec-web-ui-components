import type React from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { SineWaveProps } from "./types";

export const Sine: React.FC<SineWaveProps> = ({
    amplitude = 3,
    wavelength = 40,
    strokeWidth = 4,
    strokeColor = "currentColor",
    speed = wavelength,
}) => {
    const box = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [phase, setPhase] = useState(0);

    useLayoutEffect(() => {
        const el = box.current;
        if (!el) return;

        setWidth(el.clientWidth);
        const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

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

    const height = 2 * amplitude + strokeWidth;
    const cy = height / 2;
    const k = (2 * Math.PI) / wavelength;
    const r = strokeWidth / 2;

    let d = `M${r},${cy + amplitude * Math.sin(k * (0 - phase))}`;
    for (let x = r + 1; x <= width - r; x++) {
        d += `L${x},${cy + amplitude * Math.sin(k * (x - r - phase))}`;
    }

    return (
        <div ref={box} style={{ width: "100%", height }}>
            {width > 0 && (
                <svg width={width} height={height} aria-label="sine-wave">
                    <path
                        d={d}
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </div>
    );
};
