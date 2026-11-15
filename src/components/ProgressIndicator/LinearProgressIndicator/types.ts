import type { ProgressBar } from "react-aria-components";
import type { SineWaveProps } from "@/components/Wave";

export type LinearProgressIndicatorThickness = "default" | "thick";

export interface LinearProgressIndicatorProps
    extends React.ComponentPropsWithRef<typeof ProgressBar> {
    thickness?: LinearProgressIndicatorThickness;
    wavy?: boolean;
}

export const LinearProgressIndicatorThicknessToStrokeWidthMapping: Record<
    LinearProgressIndicatorThickness,
    number
> = {
    default: 4,
    thick: 8,
};

export const LinearProgressIndicatorSineWaveProps = (
    percentage: number,
    isInderminate: boolean,
    thickness: LinearProgressIndicatorThickness
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
        strokeWidth:
            LinearProgressIndicatorThicknessToStrokeWidthMapping[thickness],
        strokeColor: "var(--_md-linear-progress-indicator-active-color)",
    };
};
