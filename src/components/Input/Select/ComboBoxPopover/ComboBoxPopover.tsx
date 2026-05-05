import { clsx } from "clsx";
import type { PopoverProps } from "react-aria-components";
import { Popover } from "@/components/Popover";
import styles from "./comboBoxPopover.module.css";

export const ComboBoxPopover: React.FC<PopoverProps> = ({
    offset = 25, // (58dp trigger height - 20dp text line-height) / 2 + 2dp outline + 4dp space
    crossOffset = -17, // 16dp padding + 1dp border
    className,
    ...props
}) => {
    return (
        <Popover
            className={(renderProps) =>
                clsx(
                    styles["popover"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            offset={offset}
            crossOffset={crossOffset}
            {...props}
        />
    );
};
