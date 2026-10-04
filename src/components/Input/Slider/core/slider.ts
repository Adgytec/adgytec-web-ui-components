import type { ReactNode } from "react";
import type { SliderThumbRenderProps } from "react-aria-components";
import type { SliderSize } from "./size";

/**
 * Custom renderer for formatting or replacing the slider thumb value display.
 *
 * Can be a static {@link ReactNode} or a render function receiving the current
 * thumb state and index.
 *
 * @example
 * ```tsx
 * const formatPercent: OutputRenderer = ({ state, thumbIndex }) => (
 *     <span>{state.values[thumbIndex]}%</span>
 * );
 * ```
 */
export type OutputRenderer =
    | ReactNode
    | ((
          renderProps: SliderThumbRenderProps & { thumbIndex: number }
      ) => ReactNode);

/**
 * Common configuration properties shared across all slider variants.
 *
 * Extends base options for labels, sizing, step tick marks, and value outputs
 * across [`Slider`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Input/Slider/Slider/Slider.tsx),
 * [`RangeSlider`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Input/Slider/RangeSlider/RangeSlider.tsx),
 * and [`CenteredSlider`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Input/Slider/CenteredSlider/CenteredSlider.tsx).
 */
export interface BaseSliderProps {
    /**
     * Label content displayed above the slider track.
     */
    label?: ReactNode;

    /**
     * The thickness of the track and size of the slider thumb.
     *
     * @default "small"
     */
    size?: SliderSize;

    /**
     * Maximum number of step indicator tick marks to render on the track.
     * If the total number of steps exceeds this limit, intermediate tick marks are hidden
     * to avoid overcrowding and DOM bloat.
     *
     * @default 20
     */
    maxStops?: number;

    /**
     * Whether to display indicator ticks for each step along the slider track.
     *
     * @default true
     */
    showInBetweenSteps?: boolean;

    /**
     * Custom renderer or node for the floating value bubble / output badge.
     */
    outputRenderer?: OutputRenderer;
}
