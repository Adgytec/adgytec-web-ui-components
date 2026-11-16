// visual inspiration from dux shell media player seeker

import clsx from "clsx";
import { Slider, SliderThumb, SliderTrack } from "react-aria-components";
import { SineLinear, useWidth } from "@/components/Wave";
import styles from "./progressSlider.module.css";
import { type ProgressSliderProps, ProgressSliderSineWaveProps } from "./types";

const INACTIVE_COLOR = "var(--_md-slider-inactive-track-color)";
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const ACTIVE_OVERLAP = 2; // px the active track runs past the thumb center, under the thumb
const INACTIVE_OFFSET = 12; // px from the thumb center to where the inactive track starts

export const ProgressSlider = <T extends number>({
    active = true,
    className,
    isDisabled,
    ...props
}: ProgressSliderProps<T>) => {
    const { w, ref } = useWidth();
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

                const wave = ProgressSliderSineWaveProps(wavy, percentage);
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

                const activeEnd = clamp01((x + ACTIVE_OVERLAP - sw) / L);
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

                        <SliderThumb className={clsx(styles["thumb"])} />
                    </SliderTrack>
                );
            }}
        </Slider>
    );
};
