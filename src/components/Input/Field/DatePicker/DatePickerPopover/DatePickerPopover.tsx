import { clsx } from "clsx";
import { composeRenderProps } from "react-aria-components";
import { Popover } from "@/components/Popover";
import styles from "./datePickerPopover.module.css";

/**
 * A popover overlay component specifically styled for displaying calendar pickers within DatePicker and DateRangePicker.
 * Extends the standard {@link Popover} component.
 */
export const DatePickerPopover: React.FC<
    React.ComponentPropsWithRef<typeof Popover>
> = (props) => {
    return (
        <Popover
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["popover"], className)
            )}
        />
    );
};
