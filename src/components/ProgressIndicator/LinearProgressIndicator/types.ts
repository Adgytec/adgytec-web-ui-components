import type { ProgressBar } from "react-aria-components";
import type { SineWaveProps } from "@/components/Wave";
import {
    type ProgressIndicatorThickness,
    ProgressIndicatorThicknessToStrokeWidth,
} from "../core/thickness";

export interface LinearProgressIndicatorProps
    extends React.ComponentPropsWithRef<typeof ProgressBar> {
    thickness?: ProgressIndicatorThickness;
    wavy?: boolean;
}

export const LinearProgressIndicatorSineWaveProps = (
    percentage: number,
    isInderminate: boolean,
    thickness: ProgressIndicatorThickness
): SineWaveProps => {
    const baseAmplitude = 3;

    const fadeIn = 5; // wave grows over the first 5%
    const fadeOut = 5; // wave shrinks over the last 5%

    const amplitude = isInderminate
        ? baseAmplitude
        : baseAmplitude *
          Math.max(
              0,
              Math.min(1, percentage / fadeIn, (100 - percentage) / fadeOut)
          );

    const wavelength = isInderminate ? 20 : 40;

    return {
        amplitude,
        wavelength,
        speed: wavelength,
        strokeWidth: ProgressIndicatorThicknessToStrokeWidth[thickness],
        strokeColor: "var(--_md-linear-progress-indicator-active-color)",
    };
};
