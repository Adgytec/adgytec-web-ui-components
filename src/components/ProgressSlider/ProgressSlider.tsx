// visual inspiration from dux shell media player seeker

import clsx from "clsx";
import { composeRenderProps, Slider, SliderTrack } from "react-aria-components";
import { SineLinear, useWidth } from "@/components/Wave";
import { SliderThumb } from "../Input/Slider/SliderThumb";
import styles from "./progressSlider.module.css";
import { type ProgressSliderProps, ProgressSliderSineWaveProps } from "./types";

const INACTIVE_COLOR = "var(--_md-slider-inactive-track-color)";
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const INACTIVE_OFFSET = 8; // px from the thumb center to where the inactive track starts

/**
 * Expressive progress slider component inspired by modern media player seekers
 * (such as the Material You / Android playback scrubber).
 *
 * Combines an interactive range slider with layered animated {@link SineLinear} tracks:
 * - **Wavy Active Track**: When `active={true}` (default) and the slider is enabled, an animated
 *   sine wave renders along the active track segment with smooth boundary fading (0–5% and 95–100%).
 *   When `active={false}` or disabled, renders a clean flat bar.
 * - **Layered Sine Tracks**: Uses coordinate-anchored {@link SineLinear} for both the active and
 *   inactive tracks, ensuring seamless gap alignment and continuous wave oscillations during scrubbing.
 * - **Adaptive Interactive Thumb**: Features an adaptive thumb that expands from a circular dot (`16px`)
 *   into a vertical pill (`4px` × `32px`) when dragged (`[data-dragging]`) or keyboard focused (`[data-focus-visible]`).
 * - **Accessibility**: Built on [React Aria Components Slider](https://react-spectrum.adobe.com/react-aria/Slider.html),
 *   providing full keyboard navigation, screen reader support, focus ring indicators, and ARIA attributes.
 *
 * Configurable CSS tokens:
 * - `--md-slider-active-track-color`: Color of the active portion of the track and wavy sine wave (`var(--md-sys-color-primary)`).
 * - `--md-slider-inactive-track-color`: Color of the inactive background track (`var(--md-sys-color-secondary-container)`).
 * - `--md-slider-thumb-color`: Color of the slider thumb (`var(--_md-slider-active-track-color)`).
 *
 * @example
 * ```tsx
 * import { useState } from "react";
 * import { ProgressSlider } from "@adgytec/web-ui-components";
 *
 * export function AudioPlayerSeeker() {
 *     const [currentTime, setCurrentTime] = useState(30);
 *     const [isPlaying, setIsPlaying] = useState(true);
 *
 *     return (
 *         <ProgressSlider
 *             aria-label="Audio playback seeker"
 *             minValue={0}
 *             maxValue={180}
 *             value={currentTime}
 *             onChange={setCurrentTime}
 *             active={isPlaying}
 *         />
 *     );
 * }
 * ```
 */
export const ProgressSlider = <T extends number>({
    wavy = true,
    isDisabled,
    ...props
}: ProgressSliderProps<T>) => {
    const { w, ref } = useWidth();
    const useWaves = !isDisabled && wavy;

    return (
        <Slider
            {...props}
            isDisabled={isDisabled}
            className={composeRenderProps(props.className, (className) => {
                return clsx(styles["slider"], className);
            })}
        >
            {({ state }) => {
                const percentage = state.getThumbPercent(0) * 100;

                const wave = ProgressSliderSineWaveProps(useWaves, percentage);
                const sw = wave.strokeWidth ?? 4;
                const activeProps = { ...wave, width: w };
                const inactiveProps = {
                    ...activeProps,
                    amplitude: 0,
                    speed: 0,
                    strokeColor: INACTIVE_COLOR,
                };

                const L = Math.max(1, w - sw);
                const x = (percentage / 100) * w; // thumb center in px

                const activeEnd = clamp01((x - INACTIVE_OFFSET - sw) / L);
                const inactiveStart = (x + INACTIVE_OFFSET) / L;

                return (
                    <SliderTrack ref={ref} className={clsx(styles["track"])}>
                        {w > 0 && (
                            <>
                                <div className={styles["layer"]}>
                                    <SineLinear
                                        {...inactiveProps}
                                        start={inactiveStart}
                                        end={1}
                                    />
                                </div>

                                <div className={styles["layer"]}>
                                    <SineLinear
                                        {...activeProps}
                                        start={0}
                                        end={activeEnd}
                                    />
                                </div>
                            </>
                        )}

                        <SliderThumb
                            orientation="horizontal"
                            size="extra-small"
                            outputRenderer={null}
                            className={clsx(styles["thumb"])}
                        />
                    </SliderTrack>
                );
            }}
        </Slider>
    );
};
