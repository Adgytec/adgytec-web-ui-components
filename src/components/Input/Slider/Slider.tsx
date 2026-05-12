import clsx from "clsx";
import { Slider as AriaSlider } from "react-aria-components";
import { Label } from "../Label";
import type { SliderProps } from "./types";

export const Slider = <T extends number | number[]>({
    label,
    thumbLabels,
    className,
    ...props
}: SliderProps<T>) => {
    return (
        <AriaSlider
            className={(renderProps) =>
                clsx(
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {label && <Label>{label}</Label>}
        </AriaSlider>
    );
};
