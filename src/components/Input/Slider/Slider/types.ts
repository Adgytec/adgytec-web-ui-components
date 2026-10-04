import type { LucideIcon } from "lucide-react";
import type { Slider } from "react-aria-components";
import type { BaseSliderProps } from "../core";

/**
 * Props for the single-value [`Slider`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Input/Slider/Slider/Slider.tsx) component.
 */
export interface SliderProps<T extends number>
    extends Omit<React.ComponentPropsWithRef<typeof Slider<T>>, "children">,
        BaseSliderProps {
    /**
     * An icon displayed within the track (rendered for `medium`, `large`, and `extra-large` sizes).
     */
    insetIcon?: LucideIcon;

    /**
     * An alternate icon displayed within the track when the slider reaches its minimum value
     * (e.g. a muted icon for a volume control).
     */
    minInsetIcon?: LucideIcon;

    /**
     * Accessible label (`aria-label`) for the slider thumb.
     */
    thumbLabel?: string;
}
