import type { MenuProps, RenderMenuProps } from "./types";
import {
  MenuTrigger,
  Menu as UnstyledMenu,
  MenuItem,
  SubmenuTrigger,
  Separator,
} from "react-aria-components";
import styles from "./menu.module.css";
import { Popover } from "@/components/Popover/PopoverBase";
import { ChevronRight } from "lucide-react";
import { BaseCard, CardBackground } from "@/components/Card/BaseCard";

const RenderMenu = ({ menuItem, cardBackground }: RenderMenuProps) => {
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

      {hasSubmenu && <ChevronRight />}
    </MenuItem>
  );

  if (!hasSubmenu) return menuComp;

  return (
    <SubmenuTrigger>
      {menuComp}
      <Popover>
        <BaseCard background={cardBackground}>
          <UnstyledMenu className={`${styles["menu"]}`}>
            {menuItem.subItems!.map((subMenu) => {
              return (
                <RenderMenu
                  key={subMenu.id}
                  menuItem={subMenu}
                  cardBackground={cardBackground}
                />
              );
            })}
          </UnstyledMenu>
        </BaseCard>
      </Popover>
    </SubmenuTrigger>
  );
};

export const Menu = ({
  children,
  menuItems,
  cardBackground = CardBackground.gradient,
}: MenuProps) => {
  return (
    <MenuTrigger>
      {children}
      <Popover>
        <BaseCard background={cardBackground}>
          <UnstyledMenu className={`${styles["menu"]}`}>
            {menuItems.map((item) => {
              return (
                <RenderMenu
                  key={item.id}
                  cardBackground={cardBackground}
                  menuItem={item}
                />
              );
            })}
          </UnstyledMenu>
        </BaseCard>
      </Popover>
    </MenuTrigger>
  );
};
