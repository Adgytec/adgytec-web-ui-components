import clsx from "clsx";
import { useContext } from "react";
import { SliderOutput as AriaSliderOutput } from "react-aria-components";
import { typography } from "@/utils";
import { SliderThumbStateContext } from "../SliderThumb/context";
import styles from "./sliderOutput.module.css";

export const SliderOutput: React.FC<
    React.ComponentPropsWithRef<typeof AriaSliderOutput>
> = ({ className, ...props }) => {
    const { isDragging, isHovered, isFocused, isFocusVisible } = useContext(
        SliderThumbStateContext
    );

    return (
        <AriaSliderOutput
            className={(renderProps) =>
                clsx(
                    styles["output"],
                    typography.labelLarge,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-focus-visible={isFocusVisible || undefined}
            data-dragging={isDragging || undefined}
            data-hovered={isHovered || undefined}
            data-focused={isFocused || undefined}
            data-slider-output
        />
    );
};
