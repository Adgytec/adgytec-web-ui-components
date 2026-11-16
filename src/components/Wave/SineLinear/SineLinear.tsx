import type React from "react";
import { usePhase } from "../core";
import type { SineLinearProps } from "./types";

export const SineLinear: React.FC<SineLinearProps> = ({
    amplitude = 3,
    maxAmplitude = amplitude,
    wavelength = 40,
    strokeWidth = 4,
    strokeColor = "currentColor",
    speed = wavelength,
    width,
    start = 0,
    end = 1,
}) => {
    const phase = usePhase(speed);

    const height = 2 * maxAmplitude + strokeWidth;
    const cy = height / 2;
    const r = strokeWidth / 2; // room for the round caps
    const L = Math.max(0, width - strokeWidth);
    const a = r + start * L;
    const b = r + end * L;
    const k = (2 * Math.PI) / wavelength;

    // wave is anchored to the track's x, so it stays put while ranges change
    const y = (x: number) => cy + amplitude * Math.sin(k * (x - r - phase));

    let d = "";
    if (b > a) {
        d = `M${a},${y(a)}`;
        for (let x = a + 2; x < b; x += 2) d += `L${x},${y(x)}`;
        d += `L${b},${y(b)}`;
    }

    return (
        <svg
            width={width}
            height={height}
            aria-label="sine-wave"
            style={{ display: "block" }}
        >
            {d && (
                <path
                    d={d}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            )}
        </svg>
    );
};
