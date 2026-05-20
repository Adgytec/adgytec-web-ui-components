import clsx from "clsx";
import { Popover } from "@/components/Popover";
import styles from "./submenuPopover.module.css";

export const SubmenuPopover: React.FC<
    React.ComponentPropsWithRef<typeof Popover>
> = ({ offset = -1, className, ...props }) => {
    return (
        <Popover
            offset={offset}
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
