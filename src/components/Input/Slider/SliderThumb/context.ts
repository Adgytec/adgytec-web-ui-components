import { createContext } from "react";

export type SliderThumbStateContextValue = {
    isDragging?: boolean;
    isHovered?: boolean;
    isFocused?: boolean;
    isFocusVisible?: boolean;
};

export const SliderThumbStateContext =
    createContext<SliderThumbStateContextValue>({});
