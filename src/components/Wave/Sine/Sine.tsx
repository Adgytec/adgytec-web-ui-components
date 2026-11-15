import type React from "react";
import { useLayoutEffect, useRef, useState } from "react";
import { usePhase } from "../core";
import type { SineWaveProps } from "./types";

/**
 * Renders an animated horizontal sine wave SVG.
 *
 * Automatically measures its container width using a `ResizeObserver` and dynamically generates
 * an SVG path with smooth sine wave oscillations.
 *
 * @example
 * ```tsx
 * import { Sine } from "@adgytec/web-ui-components";
 *
 * // Standard animated sine wave
 * <div style={{ width: 200, height: 20 }}>
 *     <Sine amplitude={3} wavelength={40} strokeColor="var(--md-sys-color-primary)" />
 * </div>
 *
 * // Static sine wave without animation
 * <div style={{ width: 200, height: 20 }}>
 *     <Sine speed={0} />
 * </div>
 * ```
 */
export const Sine: React.FC<SineWaveProps> = ({
    amplitude = 3,
    wavelength = 40,
    strokeWidth = 4,
    strokeColor = "currentColor",
    speed = wavelength,
}) => {
    const box = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const phase = usePhase(speed);

    useLayoutEffect(() => {
        const el = box.current;
        if (!el) return;

        setWidth(el.clientWidth);
        const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const height = 2 * amplitude + strokeWidth;
    const cy = height / 2;
    const k = (2 * Math.PI) / wavelength;
    const r = strokeWidth / 2;

    let d = `M${r},${cy + amplitude * Math.sin(k * (0 - phase))}`;
    for (let x = r + 1; x <= width - r; x++) {
        d += `L${x},${cy + amplitude * Math.sin(k * (x - r - phase))}`;
    }

    return (
        <div
            ref={box}
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
            }}
        >
            {width > 0 && (
                <svg
                    width={width}
                    height={height}
                    aria-label="sine-wave"
                    style={{ display: "block" }}
                >
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
