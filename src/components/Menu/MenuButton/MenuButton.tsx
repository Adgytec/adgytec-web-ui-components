import type { MenuButtonProps } from "@/components/Menu/MenuBase/types";
import { Menu } from "@/components/Menu/MenuBase/Menu";

export const MenuButton = ({ children, menuItems }: MenuButtonProps) => {
  return <Menu menuItems={menuItems}>{children}</Menu>;
};
