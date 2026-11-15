// visual inspiration from dux shell media player seeker

import clsx from "clsx";
import { Slider, SliderThumb, SliderTrack } from "react-aria-components";
import { Sine } from "../Wave";
import styles from "./progressSlider.module.css";
import { type ProgressSliderProps, ProgressSliderSineWaveProps } from "./types";

/**
 * Expressive progress slider component inspired by modern media player seekers
 * (such as the Material You / Android playback scrubber).
 *
 * Combines an interactive range slider with an animated wavy active track:
 * - **Wavy Active Track**: When `active={true}` (default) and the slider is enabled, an animated
 *   sine wave renders along the active track segment. When `active={false}` or when the slider
 *   is disabled, it renders a smooth solid progress track.
 * - **Interactive Thumb**: Features an adaptive thumb that expands from a circular dot into a vertical
 *   pill when dragged (`[data-dragging]`) or keyboard focused (`[data-focus-visible]`) for enhanced touch and precision control.
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
    active = true,
    className,
    isDisabled,
    ...props
}: ProgressSliderProps<T>) => {
    const wavy = !isDisabled && active;
    return (
        <Slider
            className={(renderProps) =>
                clsx(
                    styles["slider"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            isDisabled={isDisabled}
            {...props}
        >
            {({ state }) => {
                const percentage = state.getThumbPercent(0) * 100;
                return (
                    <SliderTrack className={clsx(styles["track"])}>
                        {percentage > 0 && (
                            <div
                                className={clsx(styles["active"])}
                                style={{
                                    inlineSize: `${percentage}%`,
                                }}
                                data-wavy={wavy || undefined}
                            >
                                {wavy && (
                                    <Sine
                                        {...ProgressSliderSineWaveProps(
                                            percentage
                                        )}
                                    />
                                )}
                            </div>
                        )}

                        {percentage < 100 && (
                            <div className={clsx(styles["inactive"])} />
                        )}

                        <SliderThumb className={clsx(styles["thumb"])} />
                    </SliderTrack>
                );
            }}
        </Slider>
    );
};
