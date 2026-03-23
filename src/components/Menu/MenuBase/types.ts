import type { ReactElement, ReactNode } from "react";
import type { ButtonVariantProps } from "@/components/Button/ButtonBase/types";
import type { CardBackground } from "@/components/Card/BaseCard";
import type { HierarchyItemType } from "@/utils/types";

export type MenuTriggerType = "press" | "longPress";

export interface BaseMenuProps {
    triggerType?: MenuTriggerType;
    menuItems: HierarchyItemType[];
    cardBackground?: CardBackground;
}

export interface MenuProps extends BaseMenuProps {
    children: ReactNode;
}

export interface MenuButtonProps extends BaseMenuProps {
    children: ReactElement<ButtonVariantProps>;
}

export interface MenuLabelProps extends BaseMenuProps {
    children: ReactNode;
    description?: string;
}

export interface RenderMenuProps {
    menuItem: HierarchyItemType;
    cardBackground: CardBackground;
}
