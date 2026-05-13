import clsx from "clsx";
import { Slider as AriaSlider, SliderTrack } from "react-aria-components";
import { SliderThumb } from "../SliderThumb";
import styles from "./rangeSlider.module.css";
import type { RangeSliderProps, RangeSliderType } from "./types";

export const RangeSlider = <T extends RangeSliderType>({
    thumbLabels,
    className,
    size = "small",
    minValue = 0,
    maxValue = 100,
    defaultValue = [minValue, minValue] as T,
    ...props
}: RangeSliderProps<T>) => {
    return (
        <AriaSlider
            minValue={minValue}
            maxValue={maxValue}
            defaultValue={defaultValue}
            className={(renderProps) =>
                clsx(
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            <SliderTrack className={clsx(styles["track"], styles[size])}>
                {({ state }) =>
                    state.values.map((_, i) => {
                        const increaseZindex =
                            i === 0 && state.getThumbValue(i) === maxValue;
                        return (
                            <SliderThumb
                                // biome-ignore lint: index is stable here
                                key={i}
                                index={i}
                                size={size}
                                orientation="horizontal"
                                aria-label={thumbLabels?.[i]}
                                data-z-index-increase={
                                    increaseZindex || undefined
                                }
                            />
                        );
                    })
                }
            </SliderTrack>
        </AriaSlider>
    );
};
