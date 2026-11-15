import type React from "react";
import { usePhase } from "../core";
import type { SineWaveCircularProps } from "./types";

/**
 * Calculates the inner base radius of a circular wave ring.
 *
 * Subtracts half the stroke width and reserved maximum amplitude from the outer half-size,
 * ensuring the wave peaks and stroke remain within the circular bounds without clipping.
 *
 * @param size - Total diameter/bounding size of the circular container in pixels.
 * @param strokeWidth - Stroke thickness in pixels.
 * @param maxAmplitude - Maximum wave oscillation amplitude reserved.
 * @returns The calculated base ring radius in pixels.
 */
export const ringRadius = (
    size: number,
    strokeWidth: number,
    maxAmplitude: number
) => size / 2 - strokeWidth / 2 - maxAmplitude;

/**
 * Renders an animated circular sine wave SVG along an arc or closed circular loop.
 *
 * Calculates smooth radial oscillations modulated around a circular base path, supporting
 * custom arc spans (`start` and `end` in turns), wavelengths, amplitudes, and continuous phase animation.
 *
 * @example
 * ```tsx
 * import { SineCircular } from "@adgytec/web-ui-components";
 *
 * // Full animated circular wavy ring
 * <SineCircular size={48} amplitude={1.6} wavelength={15} />
 *
 * // Partial arc (e.g. from 12 o'clock to 6 o'clock)
 * <SineCircular size={48} start={0} end={0.5} strokeColor="var(--md-sys-color-primary)" />
 * ```
 */
export const SineCircular: React.FC<SineWaveCircularProps> = ({
    amplitude = 1.6,
    maxAmplitude = amplitude,
    wavelength = 15,
    strokeWidth = 4,
    strokeColor = "currentColor",
    size = 48,
    speed = 10 * wavelength,
    start = 0,
    end = 1,
}) => {
    const phase = usePhase(speed);

    const c = size / 2;
    const R = ringRadius(size, strokeWidth, maxAmplitude);
    const n = Math.max(1, Math.round((2 * Math.PI * R) / wavelength));

    const a = -Math.PI / 2 + start * 2 * Math.PI;
    const b = -Math.PI / 2 + end * 2 * Math.PI;
    const closed = end - start >= 0.999;

    let d = "";
    if (b > a) {
        const steps = Math.max(2, Math.ceil(((b - a) * R) / 1.5));
        for (let i = 0; i <= steps; i++) {
            const t = a + ((b - a) * i) / steps;
            const r = R + amplitude * Math.sin(n * t - phase / R);
            d += `${i ? "L" : "M"}${c + r * Math.cos(t)},${c + r * Math.sin(t)}`;
        }
        if (closed) d += "Z";
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            aria-hidden={true}
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
