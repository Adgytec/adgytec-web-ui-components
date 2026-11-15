import clsx from "clsx";
import { Slider, SliderThumb, SliderTrack } from "react-aria-components";
import { Sine } from "../Wave";
import styles from "./progressSlider.module.css";
import type { ProgressSliderProps } from "./types";

export const ProgressSlider = <T extends number>({
    buffered,
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
                        <div
                            className={clsx(styles["active"])}
                            style={{
                                inlineSize: `${percentage}%`,
                            }}
                            data-wavy={wavy || undefined}
                        >
                            {wavy && (
                                <Sine
                                    strokeColor="var(--_md-slider-active-track-color)"
                                    strokeWidth={4}
                                />
                            )}
                        </div>

                        <div className={clsx(styles["inactive"])} />

                        <SliderThumb className={clsx(styles["thumb"])} />
                    </SliderTrack>
                );
            }}
        </Slider>
    );
};
