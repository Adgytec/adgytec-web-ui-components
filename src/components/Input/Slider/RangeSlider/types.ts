import type { Slider } from "react-aria-components";
import type { BaseSliderProps } from "../core";

type Tuple<T> = [T, T];

/**
 * Tuple representing the start and end values `[start, end]` of a range slider.
 */
export type RangeSliderType = Tuple<number>;

/**
 * Props for the dual-thumb [`RangeSlider`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Input/Slider/RangeSlider/RangeSlider.tsx) component.
 */
export interface RangeSliderProps<T extends RangeSliderType>
    extends Omit<React.ComponentPropsWithRef<typeof Slider<T>>, "children">,
        BaseSliderProps {
    /**
     * Accessible labels (`[startThumbLabel, endThumbLabel]`) for the start and end thumbs.
     */
    thumbLabels?: Tuple<string>;
}
