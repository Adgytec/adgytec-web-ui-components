// TODO: remove unnecessary styles

import clsx from "clsx";
import {
    type PopoverProps,
    Popover as UnstyledPopover,
} from "react-aria-components";
import styles from "./popover.module.css";

export const Popover = (props: PopoverProps) => {
    return (
        <UnstyledPopover
            {...props}
            className={clsx(styles["popover"], props.className)}
        />
    );
};
