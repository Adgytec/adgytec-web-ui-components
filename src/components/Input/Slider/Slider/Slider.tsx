import clsx from "clsx";
import { Slider as AriaSlider, SliderTrack } from "react-aria-components";
import { SliderSizeStyles, SliderStyles, TrackStyles } from "../core";
import { SliderStops } from "../SliderStops";
import { SliderThumb } from "../SliderThumb";
import styles from "./slider.module.css";
import type { SliderProps } from "./types";

export const Slider = <T extends number>({
    thumbLabels,
    size = "small",
    step = 1,
    minValue = 0,
    maxValue = 100,
    showInBetweenStop,
    ...props
}: SliderProps<T>) => {
    return (
        <AriaSlider
            minValue={minValue}
            maxValue={maxValue}
            step={step}
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
                        minValue={minValue}
                        maxValue={maxValue}
                        step={step}
                        orientation={orientation}
                        showInBetweenSteps={showInBetweenStop}
                    />
                </SliderTrack>
            )}
        </AriaSlider>
    );
};
