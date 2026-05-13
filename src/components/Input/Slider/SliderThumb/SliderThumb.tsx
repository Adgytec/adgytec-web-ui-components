import clsx from "clsx";
import type { Orientation } from "react-aria";
import { SliderThumb as AriaSliderThumb } from "react-aria-components";
import { typography } from "@/utils";
import type { SliderSize } from "../core";
import styles from "./sliderThumb.module.css";

export const SliderThumb: React.FC<
    Omit<React.ComponentPropsWithRef<typeof AriaSliderThumb>, "children"> & {
        orientation: Orientation;
        size: SliderSize;
        maxValue?: number;
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
            {({ state, isFocusVisible, isDragging }) => {
                return (
                    <output
                        className={clsx(
                            styles["output"],
                            typography.labelLarge
                        )}
                        data-orientation={orientation}
                        data-focus-visible={isFocusVisible || undefined}
                        data-dragging={isDragging || undefined}
                    >
                        {state.getThumbValue(index)}
                    </output>
                );
            }}
        </AriaSliderThumb>
    );
};
