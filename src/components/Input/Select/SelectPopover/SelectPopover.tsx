import { clsx } from "clsx";
import { composeRenderProps } from "react-aria-components";
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
export const SelectPopover: React.FC<SelectPopoverProps> = ({ ...props }) => {
    return (
        <Popover
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["popover"], className)
            )}
        />
    );
};
