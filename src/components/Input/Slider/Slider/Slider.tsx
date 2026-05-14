import clsx from "clsx";
import { Slider as AriaSlider, SliderTrack } from "react-aria-components";
import { SliderStops } from "../SliderStops";
import { SliderThumb } from "../SliderThumb";
import styles from "./slider.module.css";
import type { SliderProps } from "./types";

export const Slider = <T extends number>({
    thumbLabels,
    className,
    size = "small",
    variant = "standard",
    step = 1,
    minValue = 0,
    maxValue = 100,
    ...props
}: SliderProps<T>) => {
    return (
        <AriaSlider
            minValue={minValue}
            maxValue={maxValue}
            step={step}
            className={(renderProps) =>
                clsx(
                    styles["slider"],
                    styles[size],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {({ orientation, state }) => (
                <SliderTrack className={clsx(styles["track"], styles[size])}>
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
                    <SliderStops
                        minValue={minValue}
                        maxValue={maxValue}
                        step={step}
                        orientation={orientation}
                    />
                    <SliderThumb size={size} orientation={orientation} />
                </SliderTrack>
            )}
        </AriaSlider>
    );
};
