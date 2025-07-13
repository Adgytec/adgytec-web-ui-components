import type { PopoverProps } from "./types";
import { Popover as UnstyledPopover } from "react-aria-components";
import styles from "./popover.module.css";

const Popover = ({ children }: PopoverProps) => {
  return (
    <UnstyledPopover className={`${styles["popover"]}`}>
      {children}
    </UnstyledPopover>
  );
};

export default Popover;
