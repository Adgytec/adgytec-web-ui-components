import type { ReactElement, ReactNode } from "react";
import type { HierarchyItemType } from "@/utils/types";
import type { ButtonVariantProps } from "@/components/Button/ButtonBase/types";
import type { CardBackground } from "@/components/Card/BaseCard";

export interface MenuProps {
  children: ReactNode;
  menuItems: HierarchyItemType[];
  cardBackground?: CardBackground;
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
  cardBackground: CardBackground;
}
