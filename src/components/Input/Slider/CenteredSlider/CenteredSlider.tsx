import clsx from "clsx";
import { Slider as AriaSlider, SliderTrack } from "react-aria-components";
import { Label } from "../../Label";
import {
    ActiveTrackStyles,
    InactiveTrackStyles,
    SliderColors,
    SliderSizeStyles,
    SliderStyles,
    TrackContainerStyles,
    TrackStyles,
    VisualTrackStyles,
} from "../core";
import { SliderStops } from "../SliderStops";
import { SliderThumb } from "../SliderThumb";
import styles from "./centerdSlider.module.css";
import type { CenteredSliderProps } from "./types";

export const CenteredSlider = <T extends number>({
    label,
    thumbLabel,
    size = "small",
    minValue = 0,
    maxValue = 100,
    step = 1,
    defaultValue = ((minValue + maxValue) / 2) as T,
    showInBetweenSteps,
    maxStops,
    outputRenderer,
    className,
    ...props
}: CenteredSliderProps<T>) => {
    return (
        <AriaSlider
            minValue={minValue}
            maxValue={maxValue}
            step={step}
            defaultValue={defaultValue}
            className={(renderProps) =>
                clsx(
                    SliderStyles,
                    SliderColors,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {({ orientation, state, isDisabled }) => {
                const thumbValue = state.getThumbPercent(0);
                const sizeKey =
                    orientation === "horizontal" ? "inlineSize" : "blockSize";

                const center = 0.5;

                const mid = Math.abs(thumbValue - center) * 100;
                const start = Math.min(thumbValue, center) * 100;
                const end = Math.min(1 - thumbValue, center) * 100;

                const activeDirection =
                    thumbValue < 0.5
                        ? "start"
                        : thumbValue > 0.5
                          ? "end"
                          : undefined;

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
                                        className={clsx(
                                            InactiveTrackStyles,
                                            styles["inactive-track"]
                                        )}
                                        data-active-direction={
                                            activeDirection === "start" ||
                                            undefined
                                        }
                                        data-track="start"
                                        data-orientation={orientation}
                                        data-mid={
                                            thumbValue === center || undefined
                                        }
                                        data-disabled={isDisabled || undefined}
                                        style={{
                                            [sizeKey]: `${start}%`,
                                        }}
                                    />

                                    <div
                                        className={clsx(ActiveTrackStyles)}
                                        data-orientation={orientation}
                                        data-track="mid"
                                        data-disabled={isDisabled || undefined}
                                        style={{
                                            [sizeKey]: `${mid}%`,
                                        }}
                                    >
                                        <div data-direction={activeDirection} />
                                    </div>

                                    <div
                                        className={clsx(
                                            InactiveTrackStyles,
                                            styles["inactive-track"]
                                        )}
                                        data-orientation={orientation}
                                        data-track="end"
                                        data-active-direction={
                                            activeDirection === "end" ||
                                            undefined
                                        }
                                        data-mid={
                                            thumbValue === center || undefined
                                        }
                                        data-disabled={isDisabled || undefined}
                                        style={{
                                            [sizeKey]: `${end}%`,
                                        }}
                                    />
                                </div>

                                <SliderThumb
                                    size={size}
                                    orientation={orientation}
                                    aria-label={thumbLabel}
                                    outputRenderer={outputRenderer}
                                />

                                <SliderStops
                                    slider="centered"
                                    minValue={minValue}
                                    maxValue={maxValue}
                                    step={step}
                                    orientation={orientation}
                                    showInBetweenSteps={showInBetweenSteps}
                                    maxStops={maxStops}
                                />
                            </SliderTrack>
                        </div>
                    </>
                );
            }}
        </AriaSlider>
    );
};
