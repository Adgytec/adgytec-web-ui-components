import clsx from "clsx";
import type { Orientation } from "react-aria";
import {
    SliderThumb as AriaSliderThumb,
    SliderOutput,
} from "react-aria-components";
import { typography } from "@/utils";
import type { SliderSize } from "../core";
import styles from "./sliderThumb.module.css";

export const SliderThumb: React.FC<
    Omit<React.ComponentPropsWithRef<typeof AriaSliderThumb>, "children"> & {
        orientation: Orientation;
        size: SliderSize;
    }
> = ({ index = 0, orientation, className, size, ...props }) => {
    return (
        <AriaSliderThumb
            index={index}
            className={(renderProps) =>
                clsx(
                    styles["thumb"],
                    styles[size],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            data-orientation={orientation}
            {...props}
        >
            {({ isFocusVisible, isDragging }) => {
                return (
                    <SliderOutput
                        className={clsx(
                            styles["output"],
                            typography.labelLarge
                        )}
                        data-orientation={orientation}
                        data-focus-visible={isFocusVisible || undefined}
                        data-dragging={isDragging || undefined}
                    >
                        {({ state }) => state.getThumbValueLabel(index)}
                    </SliderOutput>
                );
            }}
        </AriaSliderThumb>
    );
};
