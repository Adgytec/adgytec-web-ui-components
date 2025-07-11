import type { MenuProps, RenderMenuProps } from "./types";
import {
  MenuTrigger,
  Menu as UnstyledMenu,
  MenuItem,
  SubmenuTrigger,
  Separator,
} from "react-aria-components";
import styles from "./menu.module.css";
import Popover from "../Popover/Popover";
import { ChevronRight } from "lucide-react";

const RenderMenu = ({ menuItem }: RenderMenuProps) => {
  if (menuItem.type === "separator") {
    return <Separator className={`${styles["separator"]}`} />;
  }

  const hasSubmenu = !!menuItem.subItems?.length;
  const menuComp = (
    <MenuItem
      className={`${styles["menu-item"]} ${styles[menuItem.type]}`}
      onAction={menuItem.onPress}
      href={menuItem.href}
      target={menuItem.target}
    >
      {menuItem.node}

      {hasSubmenu && <ChevronRight size={18} strokeWidth={3} />}
    </MenuItem>
  );

  if (!hasSubmenu) return menuComp;

  return (
    <SubmenuTrigger>
      {menuComp}
      <Popover>
        <UnstyledMenu className={`${styles["menu"]}`}>
          {menuItem.subItems!.map((subMenu) => {
            return <RenderMenu key={subMenu.id} menuItem={subMenu} />;
          })}
        </UnstyledMenu>
      </Popover>
    </SubmenuTrigger>
  );
};

const Menu = ({ children, menuItems }: MenuProps) => {
  return (
    <MenuTrigger>
      {children}
      <Popover>
        <UnstyledMenu className={`${styles["menu"]}`}>
          {menuItems.map((item) => {
            return <RenderMenu key={item.id} menuItem={item} />;
          })}
        </UnstyledMenu>
      </Popover>
    </MenuTrigger>
  );
};

export default Menu;
