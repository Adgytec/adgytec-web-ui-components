import clsx from "clsx";
import { Slider, SliderThumb, SliderTrack } from "react-aria-components";
import styles from "./progressSlider.module.css";
import type { ProgressSliderProps } from "./types";

export const ProgressSlider = <T extends number>({
    buffered,
    active = true,
    className,
    ...props
}: ProgressSliderProps<T>) => {
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
            {...props}
        >
            {({ state }) => (
                <>
                    <SliderTrack className={clsx(styles["track"])}>
                        <div className={clsx(styles["active"])}></div>

                        <div className={clsx(styles["inactive"])} />

                        <SliderThumb className={clsx(styles["thumb"])} />
                    </SliderTrack>
                </>
            )}
        </Slider>
    );
};
