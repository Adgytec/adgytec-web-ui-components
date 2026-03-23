import type { ReactElement, ReactNode } from "react";
import type { ButtonVariantProps } from "@/components/Button/ButtonBase/types";
import type { CardBackground } from "@/components/Card/BaseCard";
import type { HierarchyItemType } from "@/utils/types";

export type MenuTriggerType = "press" | "longPress";

export interface MenuProps {
    children: ReactNode;
    triggerType?: MenuTriggerType;
    menuItems: HierarchyItemType[];
    cardBackground?: CardBackground;
}

export interface MenuButtonProps {
    triggerType?: MenuTriggerType;
    children: ReactElement<ButtonVariantProps>;
    menuItems: HierarchyItemType[];
}

export interface MenuLabelProps {
    triggerType?: MenuTriggerType;
    children: ReactNode;
    description?: string;
    menuItems: HierarchyItemType[];
}

export interface RenderMenuProps {
    menuItem: HierarchyItemType;
    cardBackground: CardBackground;
}
