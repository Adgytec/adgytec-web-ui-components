import clsx from "clsx";
import type { Orientation } from "react-aria";
import {
    SliderThumb as AriaSliderThumb,
    composeRenderProps,
} from "react-aria-components";
import type { OutputRenderer, SliderSize } from "../core";
import { SliderOutput } from "../SliderOutput";
import { SliderThumbStateContext } from "./context";
import styles from "./sliderThumb.module.css";

/**
 * Props for the [`SliderThumb`](src/components/Input/Slider/SliderThumb/SliderThumb.tsx) component.
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
     *
     * Setting this explicitly to `null` disables and suppresses rendering the slider output badge entirely.
     *
     * @default undefined (renders default SliderOutput)
     */
    outputRenderer?: OutputRenderer;
}

/**
 * Draggable handle component within a slider track.
 *
 * Wraps React Aria's `SliderThumb`, managing state transitions (drag, hover, focus)
 * and hosting the [`SliderOutput`](src/components/Input/Slider/SliderOutput/SliderOutput.tsx)
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
    size,
    outputRenderer,
    ...props
}) => {
    return (
        <AriaSliderThumb
            index={index}
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["thumb"], styles[size], className)
            )}
            data-orientation={orientation}
            data-slider-thumb
        >
            {(renderProp) => (
                <SliderThumbStateContext value={renderProp}>
                    {outputRenderer !== undefined ? (
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
