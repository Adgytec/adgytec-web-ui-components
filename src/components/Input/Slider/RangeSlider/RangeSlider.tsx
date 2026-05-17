import clsx from "clsx";
import { Slider as AriaSlider, SliderTrack } from "react-aria-components";
import { Label } from "../../Label";
import {
    ActiveTrackStyles,
    InactiveTrackStyles,
    SliderSizeStyles,
    SliderStyles,
    TrackContainerStyles,
    TrackStyles,
    VisualTrackStyles,
} from "../core";
import { SliderStops } from "../SliderStops";
import { SliderThumb } from "../SliderThumb";
import type { RangeSliderProps, RangeSliderType } from "./types";

export const RangeSlider = <T extends RangeSliderType>({
    label,
    thumbLabels,
    size = "small",
    minValue = 0,
    maxValue = 100,
    step = 1,
    defaultValue = [minValue, minValue] as T,
    showInBetweenSteps,
    maxStops,
    outputRenderer,
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
                const startThumbValue = state.getThumbPercent(0);
                const endThumbValue = state.getThumbPercent(1);

                const start = startThumbValue * 100;
                const mid = (endThumbValue - startThumbValue) * 100;
                const end = (1 - endThumbValue) * 100;

                const sizeKey =
                    orientation === "horizontal" ? "inlineSize" : "blockSize";

                return (
                    <>
                        {label && <Label>{label}</Label>}

                        <div
                            className={clsx(TrackContainerStyles)}
                            data-orientation={orientation}
                        >
                            <SliderTrack
                                className={clsx(
                                    TrackStyles,
                                    SliderSizeStyles(size)
                                )}
                            >
                                <div
                                    className={clsx(VisualTrackStyles)}
                                    data-orientation={orientation}
                                >
                                    <div
                                        className={clsx(InactiveTrackStyles)}
                                        data-orientation={orientation}
                                        data-track="start"
                                        style={{
                                            [sizeKey]: `${start}%`,
                                        }}
                                    />

                                    <div
                                        className={clsx(ActiveTrackStyles)}
                                        data-orientation={orientation}
                                        data-track="mid"
                                        style={{
                                            [sizeKey]: `${mid}%`,
                                        }}
                                    >
                                        <div />
                                    </div>

                                    <div
                                        className={clsx(InactiveTrackStyles)}
                                        data-orientation={orientation}
                                        data-track="end"
                                        style={{
                                            [sizeKey]: `${end}%`,
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
                                    maxStops={maxStops}
                                />

                                {state.values.map((_, i) => {
                                    const increaseZindex =
                                        i === 0 &&
                                        state.getThumbValue(i) === maxValue;
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
                                            outputRenderer={outputRenderer}
                                        />
                                    );
                                })}
                            </SliderTrack>
                        </div>
                    </>
                );
            }}
        </AriaSlider>
    );
};
