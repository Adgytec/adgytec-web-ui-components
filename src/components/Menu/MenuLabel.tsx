import type { MenuLabelProps } from "./types";
import Menu from "./Menu";
import { Pressable } from "react-aria-components";
import Tooltip from "../Tooltip/Tooltip";

const MenuLabel = ({ children, menuItems, description }: MenuLabelProps) => {
  return (
    <Menu menuItems={menuItems}>
      <Tooltip description={description}>
        <Pressable>
          <span role="button">{children}</span>
        </Pressable>
      </Tooltip>
    </Menu>
  );
};

export default MenuLabel;
