import { ColorTheme } from "../../utils/types";
import type { PopoverProps } from "./types";
import { Popover as UnstyledPopover } from "react-aria-components";
import styles from "./popover.module.css";

const Popover = ({ children, theme = ColorTheme.primary }: PopoverProps) => {
  return (
    <UnstyledPopover className={`${styles["popover"]} ${styles[theme]}`}>
      {children}
    </UnstyledPopover>
  );
};

export default Popover;
