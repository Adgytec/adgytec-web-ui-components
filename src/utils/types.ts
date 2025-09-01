import type { ReactElement } from "react";

export enum ColorTheme {
  primary = "primary",
  primaryVariant = "primary-variant",
  secondary = "secondary",
  tertiary = "tertiary",
  error = "error",
  inverseSurface = "inverse-surface",
  success = "success",
}

export type OnPressHandler = () => void;

interface HierarchyItemBase {
  id: string;
  node: string;
}

interface HierarchyItemButton extends HierarchyItemBase {
  type: "button";
  onPress: OnPressHandler;
  href?: never;
  target?: never;
  subItems?: never;
  active?: never;
}

interface HierarchyItemLink extends HierarchyItemBase {
  type: "link";
  onPress?: never;
  href: string;
  target?: string;
  active?: boolean;
  subItems?: never;
}

interface HierarchyItemsubItems extends HierarchyItemBase {
  type: "sub-items";
  href?: never;
  target?: never;
  onPress?: never;
  active?: never;
  subItems: HierarchyItemType[];
}

interface HierarchyItemNode {
  id: string;
  type: "item-node";
  node: ReactElement;
  href?: never;
  target?: never;
  onPress?: never;
  active?: never;
  subItems?: never;
}

interface HierarchySeparator {
  id: string;
  type: "separator";
  node?: never;
  href?: never;
  target?: never;
  onPress?: never;
  active?: never;
  subItems?: never;
}

export type HierarchyItemType =
  | HierarchyItemNode
  | HierarchyItemLink
  | HierarchyItemButton
  | HierarchyItemsubItems
  | HierarchySeparator;

export enum ComponentStyle {
  "solid",
  "glass",
}
