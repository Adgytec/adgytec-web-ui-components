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
     * Whether the active progress indicator renders an animated sine wave.
     *
     * - When `true`: Displays an animated sine wave along the active track in determinate mode
     *   and wavy dual bars in indeterminate mode.
     * - When `false`: Displays smooth flat bars in both determinate and indeterminate modes.
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

/**
 * Computes sine wave configuration props for {@link LinearProgressIndicator}.
 *
 * Configures wave amplitude, wavelength, speed, strokeWidth, and strokeColor for determinate
 * and indeterminate progress states.
 *
 * Features:
 * - **Boundary Amplitude Attenuation**: In determinate mode, smoothly scales wave amplitude
 *   near track boundaries (0–5% and 95–100%) to prevent visual clipping at endpoints.
 * - **Indeterminate Sizing**: Uses a tighter wavelength (`20px`) for dual moving indeterminate bars.
 * - **Flat Mode Support**: When `wavy={false}`, zeroes out amplitude and speed for static rendering.
 *
 * @param percentage - Current determinate progress percentage between 0 and 100.
 * @param thickness - Selected thickness variant (`"default"` or `"thick"`).
 * @param isIndeterminate - Whether the progress indicator is in indeterminate mode.
 * @param wavy - Whether wave animations are enabled.
 * @returns Configured wave props for {@link SineLinear}.
 */
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
