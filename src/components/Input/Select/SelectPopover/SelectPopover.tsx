import { clsx } from "clsx";
import type { PopoverProps } from "react-aria-components";
import { Popover } from "@/components/Popover";
import styles from "./selectPopover.module.css";

export const SelectPopover: React.FC<PopoverProps> = ({
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
            {...props}
        />
    );
};
