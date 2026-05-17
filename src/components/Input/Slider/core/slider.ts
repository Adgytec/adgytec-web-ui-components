import type { ReactNode } from "react";
import type { SliderThumbRenderProps } from "react-aria-components";
import type { SliderSize } from "./size";

export type OutputRenderer =
    | ReactNode
    | ((
          renderProps: SliderThumbRenderProps & { thumbIndex: number }
      ) => ReactNode);

export interface BaseSliderProps {
    label?: ReactNode;
    size?: SliderSize;
    maxStops?: number;
    showInBetweenSteps?: boolean;
    outputRenderer?: OutputRenderer;
}
