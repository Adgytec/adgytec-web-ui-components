import type { MenuItemType, MenuProps } from "./types";
import {
  MenuTrigger,
  Menu as UnstyledMenu,
  MenuItem,
  SubmenuTrigger,
  Separator,
} from "react-aria-components";
import styles from "./menu.module.css";
import Popover from "../Popover/Popover";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";

const Menu = ({ children, menuItems }: MenuProps) => {
  const renderMenu = (item: MenuItemType[], index: number, length: number) => {
    const showSeparator = index !== length - 1;

    return (
      <Fragment key={item.toString()}>
        {item.map((menuItem) => {
          const hasSubmenu = !!menuItem.subMenuItems?.length;
          const menuItemComp = (
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

          if (!hasSubmenu) return menuItemComp;

          return (
            <SubmenuTrigger>
              {menuItemComp}
              <Popover>
                <UnstyledMenu className={`${styles["menu"]}`}>
                  {menuItem.subMenuItems!.map((subMenuItems, ind) => {
                    return renderMenu(
                      subMenuItems,
                      ind,
                      menuItem.subMenuItems!.length,
                    );
                  })}
                </UnstyledMenu>
              </Popover>
            </SubmenuTrigger>
          );
        })}

        {showSeparator && <Separator className={`${styles["separator"]}`} />}
      </Fragment>
    );
  };

  return (
    <MenuTrigger>
      {children}
      <Popover>
        <UnstyledMenu className={`${styles["menu"]}`}>
          {menuItems.map((item, index) => {
            return renderMenu(item, index, menuItems.length);
          })}
        </UnstyledMenu>
      </Popover>
    </MenuTrigger>
  );
};

export default Menu;
