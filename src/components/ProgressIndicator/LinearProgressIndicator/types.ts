import type { ProgressBar } from "react-aria-components";
import type { SineWaveProps } from "@/components/Wave";
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

/**
 * Computes sine wave configuration props for determinate {@link LinearProgressIndicator}.
 *
 * Automatically fades wave amplitude near the start (0–5%) and end (95–100%) of the progress track.
 *
 * Note: Not used in indeterminate mode, as indeterminate linear progress indicators do not render waves.
 *
 * @param percentage - Current progress percentage between 0 and 100.
 * @param thickness - Selected thickness variant (`"default"` or `"thick"`).
 * @returns Configured {@link SineWaveProps} for the linear sine wave.
 */
export const LinearProgressIndicatorSineWaveProps = (
    percentage: number,
    thickness: ProgressIndicatorThickness
): SineWaveProps => {
    const baseAmplitude = 3;

    const fadeIn = 5; // wave grows over the first 5%
    const fadeOut = 5; // wave shrinks over the last 5%

    const amplitude =
        baseAmplitude *
        Math.max(
            0,
            Math.min(1, percentage / fadeIn, (100 - percentage) / fadeOut)
        );

    const wavelength = 40;
    return {
        amplitude,
        wavelength,
        speed: wavelength,
        strokeWidth: ProgressIndicatorThicknessToStrokeWidth[thickness],
        strokeColor: "var(--_md-linear-progress-indicator-active-color)",
    };
};
