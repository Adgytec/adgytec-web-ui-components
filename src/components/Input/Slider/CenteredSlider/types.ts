import type { Slider } from "react-aria-components";
import type { BaseSliderProps } from "../core";

export interface CenteredSliderProps<T extends number>
    extends Omit<
            React.ComponentPropsWithRef<typeof Slider<T>>,
            "children" | "className"
        >,
        BaseSliderProps {
    thumbLabel?: string;
}
