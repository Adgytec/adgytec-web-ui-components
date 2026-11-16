import clsx from "clsx";
import { useContext } from "react";
import {
    SliderOutput as AriaSliderOutput,
    composeRenderProps,
} from "react-aria-components";
import { typography } from "@/utils";
import { SliderThumbStateContext } from "../SliderThumb/context";
import styles from "./sliderOutput.module.css";

/**
 * Props for the [`SliderOutput`](src/components/Input/Slider/SliderOutput/SliderOutput.tsx) component.
 */
export interface SliderOutputProps
    extends React.ComponentPropsWithRef<typeof AriaSliderOutput> {}

/**
 * Output tooltip / badge component displaying the current value of the slider thumb.
 *
 * Automatically connects to [`SliderThumbStateContext`](src/components/Input/Slider/SliderThumb/context.ts)
 * to reflect hover, focus, and dragging states on data attributes.
 *
 * @example
 * ```tsx
 * <SliderOutput>
 *     {({ state }) => `${state.getThumbValueLabel(0)}%`}
 * </SliderOutput>
 * ```
 */
export const SliderOutput: React.FC<SliderOutputProps> = ({ ...props }) => {
    const { isDragging, isHovered, isFocused, isFocusVisible } = useContext(
        SliderThumbStateContext
    );

    return (
        <AriaSliderOutput
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["output"], typography.labelLarge, className)
            )}
            data-focus-visible={isFocusVisible || undefined}
            data-dragging={isDragging || undefined}
            data-hovered={isHovered || undefined}
            data-focused={isFocused || undefined}
            data-slider-output
        />
    );
};
