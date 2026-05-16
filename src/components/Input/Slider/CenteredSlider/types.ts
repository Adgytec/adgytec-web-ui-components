import type { ReactNode } from "react";
import type { Slider } from "react-aria-components";
import type { SliderSize } from "../core";

export interface CenteredSliderProps<T extends number>
    extends Omit<
        React.ComponentPropsWithRef<typeof Slider<T>>,
        "children" | "className"
    > {
    size?: SliderSize;
    thumbLabel?: string;
    showInBetweenSteps?: boolean;
    maxStops?: number;
    label?: ReactNode;
}
