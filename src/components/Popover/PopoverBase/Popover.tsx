import {
    Popover as UnstyledPopover,
    type PopoverProps,
} from "react-aria-components";
import styles from "./popover.module.css";
import clsx from "clsx";

export const Popover = (props: PopoverProps) => {
    return (
        <UnstyledPopover
            {...props}
            className={clsx(styles["popover"], props.className)}
        />
    );
};
