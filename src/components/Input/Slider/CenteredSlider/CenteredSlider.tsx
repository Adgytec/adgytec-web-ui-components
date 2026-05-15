import clsx from "clsx";
import { Slider as AriaSlider, SliderTrack } from "react-aria-components";
import { SliderSizeStyles, SliderStyles, TrackStyles } from "../core";
import { SliderStops } from "../SliderStops";
import { SliderThumb } from "../SliderThumb";
import styles from "./centeredSlider.module.css";
import type { CenteredSliderProps } from "./types";

export const CenteredSlider = <T extends number>({
    thumbLabels,
    size = "small",
    minValue = 0,
    maxValue = 100,
    step = 1,
    defaultValue = ((minValue + maxValue) / 2) as T,
    showInBetweenSteps,
    ...props
}: CenteredSliderProps<T>) => {
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
                const thumbValue = state.getThumbPercent(0);
                const sizeKey =
                    orientation === "horizontal" ? "inlineSize" : "blockSize";

                const center = 0.5;

                const middle = Math.abs(thumbValue - center) * 100;
                const left = Math.min(thumbValue, center) * 100;
                const right = Math.min(1 - thumbValue, center) * 100;

                return (
                    <SliderTrack
                        className={clsx(TrackStyles, SliderSizeStyles(size))}
                    >
                        <div
                            className={clsx(styles["visual-track"])}
                            data-orientation={orientation}
                        >
                            <div
                                className={clsx(styles["inactive-track"])}
                                data-orientation={orientation}
                                style={{
                                    [sizeKey]: `${left}%`,
                                }}
                            />

                            <div
                                className={clsx(styles["active-track"])}
                                data-orientation={orientation}
                                style={{
                                    [sizeKey]: `${middle}%`,
                                }}
                            >
                                <div />
                            </div>

                            <div
                                className={clsx(styles["inactive-track"])}
                                data-orientation={orientation}
                                style={{
                                    [sizeKey]: `${right}%`,
                                }}
                            />
                        </div>

                        <SliderThumb size={size} orientation={orientation} />

                        <SliderStops
                            slider="centered"
                            minValue={minValue}
                            maxValue={maxValue}
                            step={step}
                            orientation={orientation}
                            showInBetweenSteps={showInBetweenSteps}
                        />
                    </SliderTrack>
                );
            }}
        </AriaSlider>
    );
};
