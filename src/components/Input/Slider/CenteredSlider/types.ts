import type { Slider } from "react-aria-components";
import type { BaseSliderProps } from "../core";

/**
 * Props for the [`CenteredSlider`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Input/Slider/CenteredSlider/CenteredSlider.tsx) component.
 */
export interface CenteredSliderProps<T extends number>
    extends Omit<React.ComponentPropsWithRef<typeof Slider<T>>, "children">,
        BaseSliderProps {
    /**
     * Accessible label (`aria-label`) for the slider thumb.
     */
    thumbLabel?: string;
}
