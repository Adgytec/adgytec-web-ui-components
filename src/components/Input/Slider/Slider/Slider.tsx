import clsx from "clsx";
import {
    Slider as AriaSlider,
    SliderOutput,
    SliderThumb,
    SliderTrack,
} from "react-aria-components";
import { typography } from "@/utils";
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
                        <SliderThumb
                            className={clsx(styles["thumb"])}
                            data-orientation={orientation}
                        >
                            {({ isFocusVisible, isDragging }) => (
                                <SliderOutput
                                    className={clsx(
                                        styles["output"],
                                        typography.labelLarge
                                    )}
                                    data-orientation={orientation}
                                    data-focus-visible={
                                        isFocusVisible || undefined
                                    }
                                    data-dragging={isDragging || undefined}
                                />
                            )}
                        </SliderThumb>
                    </SliderTrack>
                </>
            )}
        </AriaSlider>
    );
};
