import type { ProgressBar } from "react-aria-components";
import type { SineWaveProps } from "@/components/Wave";

export type LinearProgressIndicatorThickness = "default" | "thick";

export interface LinearProgressIndicatorProps
    extends React.ComponentPropsWithRef<typeof ProgressBar> {
    thickness?: LinearProgressIndicatorThickness;
}

export const LinearProgressIndicatorThicknessToStrokeWidthMapping: Record<
    LinearProgressIndicatorThickness,
    number
> = {
    default: 4,
    thick: 8,
};

export const LinearProgressIndicatorSineWaveProps = (
    isInderminate: boolean,
    thickness: LinearProgressIndicatorThickness
): SineWaveProps => {
    const wavelength = isInderminate ? 20 : 40;
    return {
        amplitude: 3,
        wavelength,
        speed: wavelength,
        strokeWidth:
            LinearProgressIndicatorThicknessToStrokeWidthMapping[thickness],
        strokeColor: "var(--_md-linear-progress-indicator-active-color)",
    };
};
