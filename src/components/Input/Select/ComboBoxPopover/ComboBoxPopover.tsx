import { clsx } from "clsx";
import type { PopoverProps } from "react-aria-components";
import { Popover } from "@/components/Popover";
import styles from "./comboBoxPopover.module.css";

export const ComboBoxPopover: React.FC<PopoverProps> = ({
    offset = 24,
    crossOffset = -17,
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
