import type { ProgressBar } from "react-aria-components";
import type { SineWaveCircularProps } from "@/components/Wave";
import { ringRadius } from "@/components/Wave";
import {
    type ProgressIndicatorThickness,
    ProgressIndicatorThicknessToStrokeWidth,
} from "../core/thickness";

/**
 * Props for the {@link CircularProgressIndicator} component.
 *
 * Extends React Aria Components `ProgressBar` props with thickness, wavy, and size options.
 */
export interface CircularProgressIndicatorProps
    extends React.ComponentPropsWithRef<typeof ProgressBar> {
    /**
     * Stroke thickness variant for the indicator ring.
     *
     * - `"default"`: 4px stroke thickness.
     * - `"thick"`: 8px stroke thickness.
     *
     * @default "default"
     */
    thickness?: ProgressIndicatorThickness;

    /**
     * Whether the active progress track renders an animated sine wave.
     * When set to `false`, a smooth circular ring without waves is rendered.
     *
     * @default true
     */
    wavy?: boolean;

    /**
     * Diameter / bounding size of the circular progress indicator in pixels.
     * Clamped between `MinProgressIndicatorSize` (24) and `MaxProgressIndicatorSize` (240).
     *
     * @default 48
     */
    size?: number;
}

const RESERVED_AMPLITUDE = 1.6; // space reserved for the wave, also the max amplitude
const WAVELENGTH = 15;
const GAP = 4;
const FADE_IN = 10; // wave grows over the first 10%
const FADE_OUT = 5; // wave shrinks over the last 5%
const REFERENCE_SIZE = 48; // the size where 10 * WAVELENGTH feels right

/**
 * Computes sine wave configuration props for both the active and track layers
 * of a {@link CircularProgressIndicator}, including spacing gap turns between endpoints.
 *
 * @param percentage - Progress percentage value between 0 and 100.
 * @param isIndeterminate - Whether the indicator is in an indeterminate state.
 * @param thickness - Selected thickness variant (`"default"` or `"thick"`).
 * @param size - Diameter of the circular indicator in pixels.
 * @param wavy - Whether wavy mode is active.
 * @returns Configured wave props for active and track layers and the calculated gap in turns.
 */
export const CircularProgressIndicatorSineWaveProps = (
    percentage: number,
    isIndeterminate: boolean,
    thickness: ProgressIndicatorThickness,
    size: number,
    wavy: boolean
): {
    active: SineWaveCircularProps;
    track: SineWaveCircularProps;
    gapTurns: number;
} => {
    const strokeWidth = ProgressIndicatorThicknessToStrokeWidth[thickness];

    // wave fades in and out near 0% and 100%; always full when indeterminate
    const factor = isIndeterminate
        ? 1
        : Math.max(
              0,
              Math.min(1, percentage / FADE_IN, (100 - percentage) / FADE_OUT)
          );
    const amplitude = wavy ? RESERVED_AMPLITUDE * factor : 0;

    // gap between the round caps, converted to turns
    const R = Math.max(1, ringRadius(size, strokeWidth, RESERVED_AMPLITUDE));
    const rawGapTurns = (GAP + strokeWidth) / R / (2 * Math.PI);
    const gapTurns = Math.min(rawGapTurns, 0.25);

    const p = percentage / 100;
    const full = p >= 0.999;

    // Clamp gap in determinate mode so it does not exceed half the arc length
    const activeGap = full ? 0 : Math.min(gapTurns, p * 0.5);
    const trackGap = full ? 0 : Math.min(gapTurns, (1 - p) * 0.5);

    const shared = {
        size,
        strokeWidth,
        maxAmplitude: RESERVED_AMPLITUDE, // keeps flat and wavy rings the same size
    };

    return {
        gapTurns,
        active: {
            ...shared,
            amplitude,
            wavelength: WAVELENGTH,
            speed: 10 * WAVELENGTH * (size / REFERENCE_SIZE),
            strokeColor: "var(--_md-circular-progress-indicator-active-color)",
            // for indeterminate, the caller supplies start/end
            ...(isIndeterminate
                ? {}
                : {
                      start: full ? 0 : activeGap / 2,
                      end: full ? 1 : p - activeGap / 2,
                  }),
        },
        track: {
            ...shared,
            amplitude: 0,
            speed: 0, // flat, so no animation loop
            strokeColor: "var(--_md-circular-progress-indicator-track-color)",
            start: p + trackGap / 2,
            end: 1 - trackGap / 2,
        },
    };
};
