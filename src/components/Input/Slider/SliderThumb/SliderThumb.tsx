import clsx from "clsx";
import type { Orientation } from "react-aria";
import { SliderThumb as AriaSliderThumb } from "react-aria-components";
import type { OutputRenderer, SliderSize } from "../core";
import { SliderOutput } from "../SliderOutput";
import { SliderThumbStateContext } from "./context";
import styles from "./sliderThumb.module.css";

/**
 * Props for the [`SliderThumb`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Input/Slider/SliderThumb/SliderThumb.tsx) component.
 */
export interface SliderThumbProps
    extends Omit<
        React.ComponentPropsWithRef<typeof AriaSliderThumb>,
        "children"
    > {
    /**
     * Layout orientation of the slider track.
     */
    orientation: Orientation;
    /**
     * Size variant determining the dimensions of the thumb handle.
     */
    size: SliderSize;
    /**
     * Custom renderer or static node for the thumb value tooltip output.
     */
    outputRenderer?: OutputRenderer;
}

/**
 * Draggable handle component within a slider track.
 *
 * Wraps React Aria's `SliderThumb`, managing state transitions (drag, hover, focus)
 * and hosting the [`SliderOutput`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Input/Slider/SliderOutput/SliderOutput.tsx)
 * value bubble.
 *
 * @example
 * ```tsx
 * <SliderThumb
 *     index={0}
 *     size="medium"
 *     orientation="horizontal"
 *     aria-label="Volume level"
 * />
 * ```
 */
export const SliderThumb: React.FC<SliderThumbProps> = ({
    index = 0,
    orientation,
    className,
    size,
    outputRenderer,
    ...props
}) => {
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
            data-slider-thumb
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
