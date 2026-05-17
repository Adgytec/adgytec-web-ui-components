import type { LucideIcon } from "lucide-react";
import type { Slider } from "react-aria-components";
import type { BaseSliderProps } from "../core";

export interface SliderProps<T extends number>
    extends Omit<
            React.ComponentPropsWithRef<typeof Slider<T>>,
            "children" | "className"
        >,
        BaseSliderProps {
    insetIcon?: LucideIcon;
    minInsetIcon?: LucideIcon;
    thumbLabel?: string;
}
