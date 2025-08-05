import type { MenuLabelProps } from "@/components/Menu/MenuBase/types";
import { Menu } from "@/components/Menu/MenuBase/Menu";
import { Pressable } from "react-aria-components";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import styles from "./menu-label.module.css";

export const MenuLabel = ({
  children,
  menuItems,
  description,
}: MenuLabelProps) => {
  return (
    <Menu menuItems={menuItems}>
      <Tooltip description={description}>
        <Pressable>
          <span role="button" className={styles["pressable"]}>
            {children}
          </span>
        </Pressable>
      </Tooltip>
    </Menu>
  );
};
