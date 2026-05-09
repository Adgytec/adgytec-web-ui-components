import { clsx } from "clsx";
import { Popover } from "@/components/Popover";
import styles from "./selectPopover.module.css";

export const SelectPopover: React.FC<
    React.ComponentPropsWithRef<typeof Popover>
> = ({ className, ...props }) => {
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
