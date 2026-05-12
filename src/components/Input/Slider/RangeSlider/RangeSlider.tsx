import clsx from "clsx";
import { Slider as AriaSlider } from "react-aria-components";
import { Label } from "../../Label";
import type { RangeSliderProps } from "./types";

export const RangeSlider = <T extends number[]>({
    label,
    thumbLabels,
    className,
    ...props
}: RangeSliderProps<T>) => {
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
