import type { ProgressBar } from "react-aria-components";
import type { SineWaveCircularProps } from "@/components/Wave";
import { ringRadius } from "@/components/Wave";
import {
    type ProgressIndicatorThickness,
    ProgressIndicatorThicknessToStrokeWidth,
} from "../core/thickness";

export interface CircularProgressIndicatorProps
    extends React.ComponentPropsWithRef<typeof ProgressBar> {
    thickness?: ProgressIndicatorThickness;
    wavy?: boolean;
    size?: number;
}

const RESERVED_AMPLITUDE = 1.6; // space reserved for the wave, also the max amplitude
const WAVELENGTH = 15;
const GAP = 4;
const FADE_IN = 10; // wave grows over the first 10%
const FADE_OUT = 5; // wave shrinks over the last 5%

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
    const R = ringRadius(size, strokeWidth, RESERVED_AMPLITUDE);
    const gapTurns = (GAP + strokeWidth) / R / (2 * Math.PI);

    const p = percentage / 100;
    const full = p >= 0.999;

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
            speed: 10 * WAVELENGTH,
            strokeColor: "var(--_md-circular-progress-indicator-active-color)",
            // for indeterminate, the caller supplies start/end
            ...(isIndeterminate
                ? {}
                : {
                      start: full ? 0 : gapTurns / 2,
                      end: full ? 1 : p - gapTurns / 2,
                  }),
        },
        track: {
            ...shared,
            amplitude: 0,
            speed: 0, // flat, so no animation loop
            strokeColor: "var(--_md-circular-progress-indicator-track-color)",
            start: p + gapTurns / 2,
            end: 1 - gapTurns / 2,
        },
    };
};
