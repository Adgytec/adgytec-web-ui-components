import type { LucideIcon } from "lucide-react";
import type { Slider } from "react-aria-components";
import type { SliderSize } from "../core";

export type SliderVariant = "standard" | "centered";

export interface SliderProps<T extends number>
    extends Omit<React.ComponentPropsWithRef<typeof Slider<T>>, "children"> {
    size?: SliderSize;
    variant?: SliderVariant;
    insetIcon?: LucideIcon;
    minInsetIcon?: LucideIcon;
    thumbLabels?: string;
}
