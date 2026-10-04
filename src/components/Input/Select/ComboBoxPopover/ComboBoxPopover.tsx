import { clsx } from "clsx";
import { Popover } from "@/components/Popover";
import styles from "./comboBoxPopover.module.css";

/**
 * Props for the {@link ComboBoxPopover} component.
 * Extends {@link Popover} props.
 */
export interface ComboBoxPopoverProps
    extends React.ComponentPropsWithRef<typeof Popover> {}

/**
 * Dropdown popover container sized and positioned specifically beneath a {@link ComboBoxTrigger}.
 */
export const ComboBoxPopover: React.FC<ComboBoxPopoverProps> = ({
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
