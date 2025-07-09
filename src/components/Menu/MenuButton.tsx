import type { MenuButtonProps } from "./types";
import Menu from "./Menu";

const MenuButton = ({ children, menuItems }: MenuButtonProps) => {
  return <Menu menuItems={menuItems}>{children}</Menu>;
};

export default MenuButton;
