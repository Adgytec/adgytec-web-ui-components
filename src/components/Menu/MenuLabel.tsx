import type { MenuLabelProps } from "./types";
import Menu from "./Menu";
import { Pressable } from "react-aria-components";
import Tooltip from "../Tooltip/Tooltip";
import styles from "./menu.module.css";

const MenuLabel = ({ children, menuItems, description }: MenuLabelProps) => {
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

export default MenuLabel;
