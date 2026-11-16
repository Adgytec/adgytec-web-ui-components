import type { ProgressBar } from "react-aria-components";
import type { SineLinearProps } from "@/components/Wave/SineLinear";
import {
    type ProgressIndicatorThickness,
    ProgressIndicatorThicknessToStrokeWidth,
} from "../core/thickness";

/**
 * Props for the {@link LinearProgressIndicator} component.
 *
 * Extends React Aria Components `ProgressBar` props with thickness and wavy options.
 */
export interface LinearProgressIndicatorProps
    extends React.ComponentPropsWithRef<typeof ProgressBar> {
    /**
     * Stroke thickness variant for the linear progress bar.
     *
     * - `"default"`: 4px stroke thickness.
     * - `"thick"`: 8px stroke thickness.
     *
     * @default "default"
     */
    thickness?: ProgressIndicatorThickness;

    /**
     * Whether the active determinate progress bar renders an animated sine wave.
     *
     * **Note:** In indeterminate mode (`isIndeterminate={true}`), there are no waves
     * regardless of this prop value. Indeterminate mode always renders flat animated bar segments.
     *
     * @default true
     */
    wavy?: boolean;
}

const BASE_AMPLITUDE = 3;
const FADE_IN = 5; // wave grows over the first 5%
const FADE_OUT = 5; // wave shrinks over the last 5%
const WAVELENGTH = 40;
const INDETERMINATE_WAVELENGTH = 20;

export const LinearProgressIndicatorSineWaveProps = (
    percentage: number,
    thickness: ProgressIndicatorThickness,
    isIndeterminate = false,
    wavy = true
): Omit<SineLinearProps, "width" | "start" | "end"> => {
    const strokeWidth = ProgressIndicatorThicknessToStrokeWidth[thickness];
    const strokeColor = "var(--_md-linear-progress-indicator-active-color)";

    const wavelength = isIndeterminate ? INDETERMINATE_WAVELENGTH : WAVELENGTH;

    if (!wavy) {
        return {
            amplitude: 0,
            maxAmplitude: 0, // SVG is only as tall as the stroke
            wavelength,
            speed: 0, // no animation loop
            strokeWidth,
            strokeColor,
        };
    }

    const factor = isIndeterminate
        ? 1
        : Math.max(
              0,
              Math.min(1, percentage / FADE_IN, (100 - percentage) / FADE_OUT)
          );

    return {
        amplitude: BASE_AMPLITUDE * factor,
        maxAmplitude: BASE_AMPLITUDE,
        wavelength,
        speed: wavelength,
        strokeWidth,
        strokeColor,
    };
};
