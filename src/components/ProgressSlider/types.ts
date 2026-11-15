import type { Slider } from "react-aria-components";

export interface ProgressSliderProps<T extends number>
    extends Omit<React.ComponentPropsWithRef<typeof Slider<T>>, "children"> {
    buffered?: number;
    // when active is set to true -> active track is wavy, otherwise its flat
    active?: boolean;
}
