import {
  Popover as UnstyledPopover,
  type PopoverProps,
} from "react-aria-components";
import styles from "./popover.module.css";

export const Popover = (props: PopoverProps) => {
  return (
    <UnstyledPopover
      {...props}
      className={props.className ?? styles["popover"]}
    />
  );
};
