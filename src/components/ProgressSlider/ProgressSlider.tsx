// visual inspiration from dux shell media player seeker

import clsx from "clsx";
import { composeRenderProps, Slider, SliderTrack } from "react-aria-components";
import { SineLinear, useWidth } from "@/components/Wave";
import { SliderThumb } from "../Input/Slider/SliderThumb";
import styles from "./progressSlider.module.css";
import {
    type BufferRange,
    type ProgressSliderProps,
    ProgressSliderSineWaveProps,
} from "./types";

const INACTIVE_COLOR = "var(--_md-slider-inactive-track-color)";
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const INACTIVE_OFFSET = 8; // px from the thumb center to where the inactive track starts

const EMPTY_RANGES: ReadonlyArray<BufferRange> = []; // NEW: stable default reference

// NEW: pick a token that reads as a step between the inactive track and the
// active one (set it next to INACTIVE_COLOR)
const BUFFER_COLOR = "var(--_md-slider-buffer-range-color)";

/**
 * Converts value-space buffer ranges into normalized `SineLinear` track segment coordinates (`0..1` of track length `L`),
 * clamping to inactive boundaries and discarding negligible slivers.
 */
function getBufferSegments(
    ranges: ReadonlyArray<BufferRange>,
    min: number,
    max: number,
    w: number,
    L: number,
    inactiveStart: number,
    minLength: number
) {
    const span = max - min;
    if (span <= 0 || L <= 0) return [];

    // same px -> line-space mapping used for the thumb position
    const toLine = (v: number) => (clamp01((v - min) / span) * w) / L;

    return (
        ranges
            .map((r) => ({
                // never start before the inactive track, so the gap around the thumb stays clean
                start: Math.max(toLine(r.start), inactiveStart),
                end: Math.min(toLine(r.end), 1),
            }))
            // skip empty ranges and slivers that would render as a dot
            .filter((s) => (s.end - s.start) * L >= minLength)
    );
}

/**
 * Expressive progress slider component inspired by modern media player seekers
 * (such as the Material You / Android playback scrubber).
 *
 * Combines an interactive range slider with layered animated {@link SineLinear} tracks:
 * - **Wavy Active Track**: When `wavy={true}` (default) and the slider is enabled, an animated
 *   sine wave renders along the active track segment with smooth boundary fading (0–5% and 95–100%).
 *   When `wavy={false}` or disabled, renders a clean flat bar.
 * - **Layered Sine Tracks**: Uses coordinate-anchored {@link SineLinear} for both the active and
 *   inactive tracks, ensuring seamless gap alignment and continuous wave oscillations during scrubbing.
 * - **Slider Thumb**: Integrates the unified {@link SliderThumb} component (with `size="extra-small"`),
 *   providing standardized drag state styling, high-visibility focus indicator rings, and smooth interaction.
 * - **Buffered Ranges**: Supports secondary buffered/loaded segments rendered behind active progress via the `bufferedRanges` prop.
 * - **Minimum Dimensions**: Enforces a minimum inline width of 48px to prevent track collapse across compact player controls.
 * - **Accessibility**: Built on [React Aria Components Slider](https://react-spectrum.adobe.com/react-aria/Slider.html),
 *   providing full keyboard navigation, screen reader support, focus ring indicators, and ARIA attributes.
 *
 * Configurable CSS tokens:
 * - `--md-slider-active-track-color`: Color of the active portion of the track and wavy sine wave (`var(--md-sys-color-primary)`).
 * - `--md-slider-inactive-track-color`: Color of the inactive background track (`var(--md-sys-color-secondary-container)`).
 * - `--md-slider-buffer-range-color`: Color of buffered ranges rendered behind active progress.
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
 *             wavy={isPlaying}
 *         />
 *     );
 * }
 * ```
 */
export const ProgressSlider = <T extends number>({
    wavy = true,
    isDisabled,
    bufferedRanges = EMPTY_RANGES, // NEW
    minValue = 0, // NEW: RAC defaults, destructured so we can use them below
    maxValue = 100, // NEW
    ...props
}: ProgressSliderProps<T>) => {
    const { w, ref } = useWidth();
    const useWaves = !isDisabled && wavy;
    const displayBufferRanges = !isDisabled;

    return (
        <Slider
            {...props}
            minValue={minValue} // NEW: re-pass since we pulled them out of props
            maxValue={maxValue} // NEW
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

                // NEW
                const bufferSegments = getBufferSegments(
                    bufferedRanges,
                    minValue,
                    maxValue,
                    w,
                    L,
                    inactiveStart,
                    sw
                );

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

                                {/* NEW: between inactive and active; always flat */}
                                {displayBufferRanges &&
                                    bufferSegments.map((s) => (
                                        <div
                                            key={`${s.start}-${s.end}`}
                                            className={styles["layer"]}
                                            aria-hidden="true"
                                        >
                                            <SineLinear
                                                {...inactiveProps}
                                                strokeColor={BUFFER_COLOR}
                                                start={s.start}
                                                end={s.end}
                                            />
                                        </div>
                                    ))}

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
