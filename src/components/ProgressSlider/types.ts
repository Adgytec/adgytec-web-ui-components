import type { Slider } from "react-aria-components";
import type { SineWaveProps } from "@/components/Wave";

/**
 * Props for the {@link ProgressSlider} component.
 *
 * Extends React Aria Components `Slider` props (omitting raw `children` to provide
 * an integrated animated wavy progress track and responsive thumb).
 *
 * Configurable CSS tokens:
 * - `--md-slider-active-track-color`: Color of the active track portion and wavy sine wave (`var(--md-sys-color-primary)`).
 * - `--md-slider-inactive-track-color`: Color of the inactive background track (`var(--md-sys-color-secondary-container)`).
 * - `--md-slider-thumb-color`: Color of the slider thumb (`var(--_md-slider-active-track-color)`).
 *
 * @example
 * ```tsx
 * import { ProgressSlider } from "@adgytec/web-ui-components";
 *
 * <ProgressSlider
 *     aria-label="Playback progress"
 *     value={30}
 *     onChange={(value) => console.log(value)}
 * />
 * ```
 */
export interface ProgressSliderProps<T extends number>
    extends Omit<
        React.ComponentPropsWithRef<typeof Slider<T>>,
        "children" | "orientation"
    > {
    /**
     * Whether the active progress track renders an animated sine wave.
     *
     * - When `true` (and not disabled): The active track displays an animated sine wave.
     * - When `false`: The active track renders as a solid flat bar (ideal for paused states).
     * - When `isDisabled={true}`: The track renders flat regardless of `active`.
     *
     * @default true
     */
    active?: boolean;
}

/**
 * Computes sine wave configuration props for {@link ProgressSlider}.
 *
 * Automatically fades wave amplitude near the start (0–5%) and end (95–100%) of the progress track
 * to ensure smooth visual transitions as the thumb scrubs near track boundaries.
 *
 * @param percentage - Current progress percentage between 0 and 100.
 * @returns Configured {@link SineWaveProps} for the linear sine wave.
 */
export const ProgressSliderSineWaveProps = (
    percentage: number
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
        strokeWidth: 4,
        strokeColor: "var(--_md-slider-active-track-color)",
    };
};
