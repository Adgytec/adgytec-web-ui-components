import clsx from "clsx";
import {
    Tooltip as AriaTooltip,
    type TooltipProps,
} from "react-aria-components";
import styles from "./tooltip.module.css";

export const Tooltip: React.FC<TooltipProps> = ({ className, ...props }) => {
    return (
        <AriaTooltip
            className={(renderProps) =>
                clsx(
                    styles["tooltip"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
