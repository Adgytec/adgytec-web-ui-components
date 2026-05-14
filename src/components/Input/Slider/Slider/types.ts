import type { LucideIcon } from "lucide-react";
import type { Slider } from "react-aria-components";
import type { SliderSize } from "../core";

export interface SliderProps<T extends number>
    extends Omit<
        React.ComponentPropsWithRef<typeof Slider<T>>,
        "children" | "className"
    > {
    size?: SliderSize;
    insetIcon?: LucideIcon;
    minInsetIcon?: LucideIcon;
    thumbLabels?: string;
    showInBetweenStop?: boolean;
}
