import clsx from "clsx";
import { Slider as AriaSlider, SliderTrack } from "react-aria-components";
import { SliderThumb } from "../SliderThumb";
import styles from "./slider.module.css";
import type { SliderProps } from "./types";

export const Slider = <T extends number>({
    thumbLabels,
    className,
    size = "small",
    variant = "standard",
    step,
    ...props
}: SliderProps<T>) => {
    return (
        <AriaSlider
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
            {({ orientation }) => (
                <>
                    <SliderTrack
                        className={clsx(styles["track"], styles[size])}
                    >
                        <SliderThumb size={size} orientation={orientation} />
                    </SliderTrack>
                </>
            )}
        </AriaSlider>
    );
};
