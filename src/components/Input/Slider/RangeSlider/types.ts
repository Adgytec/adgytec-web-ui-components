import type { Slider } from "react-aria-components";
import type { SliderSize } from "../core";

type Tuple<T> = [T, T];
export type RangeSliderType = Tuple<number>;

export interface RangeSliderProps<T extends RangeSliderType>
    extends Omit<
        React.ComponentPropsWithRef<typeof Slider<T>>,
        "children" | "className"
    > {
    size?: SliderSize;
    thumbLabels?: Tuple<string>;
    showInBetweenSteps?: boolean;
    maxStops?: number;
}
