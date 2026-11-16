import type React from "react";
import { usePhase } from "../core";
import type { SineLinearProps } from "./types";

/**
 * Renders an animated horizontal sine wave along a bounded track segment.
 *
 * Unlike a simple responsive wave, `SineLinear` takes a known track `width` and normalized
 * segment boundaries (`start` and `end`, from 0 to 1). The wave oscillation is anchored to
 * the track's coordinate system so that wave crests remain stationary in space even as
 * `start` or `end` boundaries shift (e.g. during progress updates or scrubber dragging).
 *
 * Features:
 * - **Anchored Wave Coordinate Space**: The wave phase is tied to track coordinate space,
 *   preventing unnatural wave jitter or scrolling during range expansions.
 * - **Fractional Segment Windowing**: Renders any sub-segment `[start, end]` of the wave track.
 * - **Flat Line Optimization**: When `amplitude === 0`, renders a clean straight line (`M..L`)
 *   without redundant curve points.
 * - **Round Cap Insets**: Automatically offsets start and end caps by half the stroke width
 *   so rounded caps align precisely with the track bounds.
 *
 * @example
 * ```tsx
 * import { SineLinear } from "@adgytec/web-ui-components";
 *
 * // Full-width animated sine wave on a 300px track
 * <SineLinear width={300} strokeColor="var(--md-sys-color-primary)" />
 *
 * // Partial segment from 0% to 60% with custom amplitude and wavelength
 * <SineLinear
 *     width={300}
 *     start={0}
 *     end={0.6}
 *     amplitude={3}
 *     wavelength={40}
 * />
 *
 * // Static flat line segment (amplitude: 0, speed: 0)
 * <SineLinear
 *     width={300}
 *     start={0.6}
 *     end={1}
 *     amplitude={0}
 *     speed={0}
 *     strokeColor="var(--md-sys-color-secondary-container)"
 * />
 * ```
 */
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
        if (amplitude === 0) {
            d = `M${a},${cy}L${b},${cy}`;
        } else {
            d = `M${a},${y(a)}`;
            for (let x = a + 2; x < b; x += 2) d += `L${x},${y(x)}`;
            d += `L${b},${y(b)}`;
        }
    }

    return (
        <svg
            width={width}
            height={height}
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
