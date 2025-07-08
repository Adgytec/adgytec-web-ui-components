import type { ReactElement, ReactNode } from "react";
import type { OnPressHandler } from "../../utils/types";
import type { ButtonVariantProps } from "../Button/types";

interface MenuItemBase {
  node: ReactNode;
}

interface MenuItemButton extends MenuItemBase {
  type: "button";
  onPress: OnPressHandler;
  href?: never;
  target?: never;
  subMenuItems?: never;
}

interface MenuItemLink extends MenuItemBase {
  type: "link";
  onPress?: never;
  href: string;
  target?: string;
  subMenuItems?: never;
}

interface MenuItemSubMenu extends MenuItemBase {
  type: "sub-menu";
  href?: never;
  target?: never;
  onPress?: never;
  subMenuItems: MenuItem[];
}

export type MenuItem = MenuItemButton | MenuItemLink | MenuItemSubMenu;

export interface MenuProps {
  children: ReactElement<ButtonVariantProps>;
  menuItems: MenuItem[];
}
