import clsx from "clsx";
import { Tooltip as AriaTooltip } from "react-aria-components";
import { typography } from "@/utils/typography";
import styles from "./tooltip.module.css";

export const Tooltip: React.FC<
    React.ComponentPropsWithRef<typeof AriaTooltip>
> = ({ className, offset = 4, ...props }) => {
    return (
        <AriaTooltip
            offset={offset}
            className={(renderProps) =>
                clsx(
                    styles["tooltip"],
                    typography.labelMedium,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-tooltip
        />
    );
};
