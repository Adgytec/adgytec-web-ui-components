import { clsx } from "clsx";
import { Popover } from "@/components/Popover";
import styles from "./selectPopover.module.css";

/**
 * Props for the {@link SelectPopover} component.
 * Extends {@link Popover} props.
 */
export interface SelectPopoverProps
    extends React.ComponentPropsWithRef<typeof Popover> {}

/**
 * Floating dropdown container for displaying {@link SelectList} items.
 */
export const SelectPopover: React.FC<SelectPopoverProps> = ({
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
