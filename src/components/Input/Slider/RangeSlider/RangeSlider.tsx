import clsx from "clsx";
import { Slider as AriaSlider, SliderTrack } from "react-aria-components";
import {
    ActiveTrackStyles,
    InactiveTrackStyles,
    SliderSizeStyles,
    SliderStyles,
    TrackStyles,
    VisualTrackStyles,
} from "../core";
import { SliderStops } from "../SliderStops";
import { SliderThumb } from "../SliderThumb";
import type { RangeSliderProps, RangeSliderType } from "./types";

export const RangeSlider = <T extends RangeSliderType>({
    thumbLabels,
    size = "small",
    minValue = 0,
    maxValue = 100,
    step = 1,
    defaultValue = [minValue, minValue] as T,
    showInBetweenSteps,
    ...props
}: RangeSliderProps<T>) => {
    return (
        <AriaSlider
            minValue={minValue}
            maxValue={maxValue}
            step={step}
            defaultValue={defaultValue}
            className={clsx(SliderStyles)}
            {...props}
        >
            {({ orientation, state }) => {
                const start = state.getThumbPercent(0);
                const end = state.getThumbPercent(1);

                const left = start * 100;
                const middle = (end - start) * 100;
                const right = (1 - end) * 100;

                const sizeKey =
                    orientation === "horizontal" ? "inlineSize" : "blockSize";

                return (
                    <SliderTrack
                        className={clsx(TrackStyles, SliderSizeStyles(size))}
                    >
                        <div
                            className={clsx(VisualTrackStyles)}
                            data-orientation={orientation}
                        >
                            <div
                                className={clsx(InactiveTrackStyles)}
                                data-orientation={orientation}
                                style={{
                                    [sizeKey]: `${left}%`,
                                }}
                            />

                            <div
                                className={clsx(ActiveTrackStyles)}
                                data-orientation={orientation}
                                style={{
                                    [sizeKey]: `${middle}%`,
                                }}
                            >
                                <div />
                            </div>

                            <div
                                className={clsx(InactiveTrackStyles)}
                                data-orientation={orientation}
                                style={{
                                    [sizeKey]: `${right}%`,
                                }}
                            />
                        </div>

                        <SliderStops
                            minValue={minValue}
                            maxValue={maxValue}
                            step={step}
                            orientation={orientation}
                            slider="range"
                            showInBetweenSteps={showInBetweenSteps}
                        />

                        {state.values.map((_, i) => {
                            const increaseZindex =
                                i === 0 && state.getThumbValue(i) === maxValue;
                            return (
                                <SliderThumb
                                    // biome-ignore lint: index is stable here
                                    key={i}
                                    index={i}
                                    size={size}
                                    orientation={orientation}
                                    aria-label={thumbLabels?.[i]}
                                    data-z-index-increase={
                                        increaseZindex || undefined
                                    }
                                />
                            );
                        })}
                    </SliderTrack>
                );
            }}
        </AriaSlider>
    );
};
