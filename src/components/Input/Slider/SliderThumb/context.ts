import { createContext } from "react";

/**
 * State values exposed by the parent [`SliderThumb`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Input/Slider/SliderThumb/SliderThumb.tsx)
 * representing current user interactions.
 */
export type SliderThumbStateContextValue = {
    /**
     * Whether the slider thumb is currently being dragged.
     */
    isDragging?: boolean;
    /**
     * Whether the slider thumb is currently hovered by a pointer.
     */
    isHovered?: boolean;
    /**
     * Whether the slider thumb currently has input focus.
     */
    isFocused?: boolean;
    /**
     * Whether the slider thumb has visible focus styling (e.g. via keyboard navigation).
     */
    isFocusVisible?: boolean;
};

/**
 * React context providing thumb interaction state to child components such as
 * [`SliderOutput`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Input/Slider/SliderOutput/SliderOutput.tsx).
 */
export const SliderThumbStateContext =
    createContext<SliderThumbStateContextValue>({});
