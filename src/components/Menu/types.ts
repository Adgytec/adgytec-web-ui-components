import type { ReactElement, ReactNode } from "react";
import type { OnPressHandler } from "../../utils/types";
import type { ButtonVariantProps } from "../Button/types";

interface MenuItemBase {
  node: string;
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
  subMenuItems: MenuItemType[][];
}

interface MenuItemNode {
  type: "item-node";
  node: ReactElement;
  href?: never;
  target?: never;
  onPress?: never;
  // not sure about this for now it will be never and later on can change it if required
  subMenuItems?: never;
}

export type MenuItemType =
  | MenuItemButton
  | MenuItemLink
  | MenuItemSubMenu
  | MenuItemNode;

export interface MenuProps {
  children: ReactNode;
  menuItems: MenuItemType[][];
}

export interface MenuButtonProps {
  children: ReactElement<ButtonVariantProps>;
  menuItems: MenuItemType[][];
}

export interface MenuLabelProps {
  children: ReactNode;
  description?: string;
  menuItems: MenuItemType[][];
}
