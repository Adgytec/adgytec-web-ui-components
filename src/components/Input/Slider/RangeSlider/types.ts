import type { ReactNode } from "react";
import type { Slider } from "react-aria-components";
import type { SliderSize } from "../core";

export interface RangeSliderProps<T extends number[]>
    extends Omit<
        React.ComponentPropsWithRef<typeof Slider<T>>,
        "children" | "orientation"
    > {
    size?: SliderSize;
    label?: ReactNode;
    thumbLabels?: string[];
}
