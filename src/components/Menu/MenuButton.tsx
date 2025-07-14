import type { MenuButtonProps } from "./types";
import { Menu } from "./Menu";

export const MenuButton = ({ children, menuItems }: MenuButtonProps) => {
  return <Menu menuItems={menuItems}>{children}</Menu>;
};
