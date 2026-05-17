import clsx from "clsx";
import { SliderOutput as AriaSliderOutput } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./sliderOutput.module.css";

export const SliderOutput: React.FC<
    React.ComponentPropsWithRef<typeof AriaSliderOutput>
> = ({ className, ...props }) => {
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
        />
    );
};
