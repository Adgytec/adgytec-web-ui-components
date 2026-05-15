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
            {({ orientation, state }) => (
                <SliderTrack
                    className={clsx(TrackStyles, SliderSizeStyles(size))}
                >
                    <div
                        className={clsx(styles["visual-track"])}
                        data-orientation={orientation}
                    >
                        <div
                            className={clsx(styles["active-track"])}
                            data-orientation={orientation}
                            style={{
                                flexGrow: state.getThumbPercent(0),
                            }}
                        />

                        <div
                            className={clsx(styles["inactive-track"])}
                            style={{
                                flexGrow: 1 - state.getThumbPercent(0),
                            }}
                            data-orientation={orientation}
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
            )}
        </AriaSlider>
    );
};
