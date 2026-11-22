import type { Slider } from "react-aria-components";
import type { SineLinearProps } from "@/components/Wave";

/**
 * Props for the {@link ProgressSlider} component.
 *
 * Extends React Aria Components `Slider` props (omitting raw `children` and `orientation`
 * to provide an integrated horizontal animated wavy progress track and responsive thumb).
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
     * - When `isDisabled={true}`: The track renders flat regardless of `wavy`.
     *
     * @default true
     */
    wavy?: boolean;
}

const BASE_AMPLITUDE = 3;
const FADE_IN = 5; // wave grows over the first 5%
const FADE_OUT = 5; // wave shrinks over the last 5%
const WAVELENGTH = 40;

/**
 * Computes wave configuration props for {@link ProgressSlider}.
 *
 * Automatically fades wave amplitude near the start (0–5%) and end (95–100%) of the progress track
 * to ensure smooth visual transitions as the thumb scrubs near boundaries. When `wavy` is `false`,
 * zeroes out amplitude and speed to render a flat static track.
 *
 * @param wavy - Whether wave animations are enabled.
 * @param percentage - Current progress percentage between 0 and 100.
 * @returns Configured wave props for {@link SineLinear}.
 */
export const ProgressSliderSineWaveProps = (
    wavy: boolean,
    percentage: number
): Omit<SineLinearProps, "width" | "start" | "end"> => {
    const strokeWidth = 4;
    const strokeColor = "var(--_md-slider-active-track-color)";

    if (!wavy) {
        return {
            amplitude: 0,
            maxAmplitude: 0, // SVG is only as tall as the stroke
            wavelength: WAVELENGTH,
            speed: 0, // no animation loop
            strokeWidth,
            strokeColor,
        };
    }

    const factor = Math.max(
        0,
        Math.min(1, percentage / FADE_IN, (100 - percentage) / FADE_OUT)
    );

    return {
        amplitude: BASE_AMPLITUDE * factor,
        maxAmplitude: BASE_AMPLITUDE, // keeps the SVG height fixed while the wave fades
        wavelength: WAVELENGTH,
        speed: WAVELENGTH,
        strokeWidth,
        strokeColor,
    };
};
