import type { ReactNode } from "react";
import type { SliderThumbRenderProps } from "react-aria-components";
import type { SliderSize } from "./size";

/**
 * Custom renderer for formatting or replacing the slider thumb value display.
 *
 * Can be:
 * - A render function receiving current thumb state and index: `({ state, thumbIndex, ...renderProps }) => ReactNode`
 * - A static {@link ReactNode} to render inside the thumb
 * - Explicit `null` to disable and suppress rendering the slider output badge entirely
 *
 * When `undefined` or omitted, defaults to rendering the standard {@link SliderOutput} bubble displaying
 * `state.getThumbValueLabel(index)`.
 *
 * @example
 * ```tsx
 * // Custom formatting
 * const formatPercent: OutputRenderer = ({ state, thumbIndex }) => (
 *     <span>{state.values[thumbIndex]}%</span>
 * );
 *
 * // Suppress output bubble entirely
 * <Slider outputRenderer={null} />
 * ```
 */
export type OutputRenderer =
    | ReactNode
    | ((
          renderProps: SliderThumbRenderProps & { thumbIndex: number }
      ) => ReactNode)
    | null;

/**
 * Common configuration properties shared across all slider variants.
 *
 * Extends base options for labels, sizing, step tick marks, and value outputs
 * across [`Slider`](src/components/Input/Slider/Slider/Slider.tsx),
 * [`RangeSlider`](src/components/Input/Slider/RangeSlider/RangeSlider.tsx),
 * and [`CenteredSlider`](src/components/Input/Slider/CenteredSlider/CenteredSlider.tsx).
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
     *
     * Accepts:
     * - A render function receiving thumb state and index: `({ state, thumbIndex }) => ReactNode`
     * - A static {@link ReactNode}
     * - Explicit `null`: disables and suppresses rendering the slider output badge entirely
     *
     * When omitted or `undefined`, the default {@link SliderOutput} bubble is rendered.
     *
     * @default undefined (renders default SliderOutput)
     *
     * @example
     * ```tsx
     * // Disable output bubble entirely
     * <Slider outputRenderer={null} />
     *
     * // Format value with custom unit
     * <Slider outputRenderer={({ state, thumbIndex }) => `${state.values[thumbIndex]} dB`} />
     * ```
     */
    outputRenderer?: OutputRenderer;
}
