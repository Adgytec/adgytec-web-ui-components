import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { Slider } from "react-aria-components";

export type SliderVariant = "standard" | "centered" | "range";

export type SliderSize =
    | "extra-small"
    | "small"
    | "medium"
    | "large"
    | "extra-large";

export interface SliderProps<T extends number | number[]>
    extends Omit<React.ComponentPropsWithRef<typeof Slider<T>>, "children"> {
    size?: SliderSize;
    variant?: SliderVariant;
    insetIcon?: LucideIcon;
    minInsetIcon?: LucideIcon;
    label?: ReactNode;
    thumbLabels?: string[];
}
