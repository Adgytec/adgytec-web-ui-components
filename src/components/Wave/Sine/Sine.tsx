import type React from "react";
import { useLayoutEffect, useRef, useState } from "react";
import { usePhase } from "../core";
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
