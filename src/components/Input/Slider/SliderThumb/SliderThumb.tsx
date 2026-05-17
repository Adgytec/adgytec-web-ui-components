import clsx from "clsx";
import type { Orientation } from "react-aria";
import { SliderThumb as AriaSliderThumb } from "react-aria-components";
import type { OutputRenderer, SliderSize } from "../core";
import { SliderOutput } from "../SliderOutput";
import { SliderThumbStateContext } from "./context";
import styles from "./sliderThumb.module.css";

export const SliderThumb: React.FC<
    Omit<React.ComponentPropsWithRef<typeof AriaSliderThumb>, "children"> & {
        orientation: Orientation;
        size: SliderSize;
        outputRenderer?: OutputRenderer;
    }
> = ({ index = 0, orientation, className, size, outputRenderer, ...props }) => {
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
            {(renderProp) => (
                <SliderThumbStateContext value={renderProp}>
                    {outputRenderer ? (
                        typeof outputRenderer === "function" ? (
                            outputRenderer({
                                ...renderProp,
                                thumbIndex: index,
                            })
                        ) : (
                            outputRenderer
                        )
                    ) : (
                        <SliderOutput>
                            {({ state }) => state.getThumbValueLabel(index)}
                        </SliderOutput>
                    )}
                </SliderThumbStateContext>
            )}
        </AriaSliderThumb>
    );
};
