import clsx from "clsx";
import {
    Popover as AriaPopover,
    type PopoverProps,
} from "react-aria-components";
import styles from "./popover.module.css";

export const Popover: React.FC<PopoverProps> = ({ className, ...props }) => {
    return (
        <AriaPopover
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
