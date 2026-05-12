import type { ReactNode } from "react";
import type { Slider } from "react-aria-components";

export interface SliderProps<T extends number | number[]>
    extends Omit<React.ComponentPropsWithRef<typeof Slider<T>>, "children"> {
    label?: ReactNode;
    thumbLabels?: string[];
}
