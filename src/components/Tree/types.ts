import type { ReactElement } from "react";
import type { OnPressHandler } from "../../utils/types";

interface TreeItemBase {
  id: string;
}

interface TreeItemLink extends TreeItemBase {
  type: "link";
  value: string;
  href: string;
  target?: string;
  onPress?: never;
  children?: never;
  active?: boolean;
}

interface TreeItemButton extends TreeItemBase {
  type: "button";
  value: string;
  onPress: OnPressHandler;
  href?: never;
  target?: never;
  children?: never;
  active?: never;
}

interface TreeItemSubItems extends TreeItemBase {
  type: "sub-items";
  value: string;
  onPress?: never;
  href?: never;
  target?: never;
  children?: TreeItemType[];
  active?: never;
}

interface TreeItemNode extends TreeItemBase {
  type: "node";
  value: ReactElement;
  onPress?: never;
  href?: never;
  target?: never;
  children?: never;
  active?: never;
}

export type TreeItemType =
  | TreeItemLink
  | TreeItemButton
  | TreeItemNode
  | TreeItemSubItems;

export interface TreeProps {
  items: TreeItemType[];
}
