import type { ReactElement, ReactNode } from "react";
import type { HierarchyItemType } from "../../utils/types";
import type { ButtonVariantProps } from "../Button/types";

export interface MenuProps {
  children: ReactNode;
  menuItems: HierarchyItemType[];
}

export interface MenuButtonProps {
  children: ReactElement<ButtonVariantProps>;
  menuItems: HierarchyItemType[];
}

export interface MenuLabelProps {
  children: ReactNode;
  description?: string;
  menuItems: HierarchyItemType[];
}

export interface RenderMenuProps {
  menuItem: HierarchyItemType;
}
