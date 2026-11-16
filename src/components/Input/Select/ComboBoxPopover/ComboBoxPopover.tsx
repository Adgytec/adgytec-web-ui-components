import { clsx } from "clsx";
import { composeRenderProps } from "react-aria-components";
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
    ...props
}) => {
    return (
        <Popover
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["popover"], className)
            )}
            offset={offset}
            crossOffset={crossOffset}
        />
    );
};
