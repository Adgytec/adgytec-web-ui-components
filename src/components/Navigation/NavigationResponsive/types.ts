import type { SidebarPosition, SidebarSize } from "@/components/Sidebar/types";
import type { HierarchyItemType } from "@/utils/types";

export interface NavigationResponsiveProps {
    items: HierarchyItemType[];
    mediaQuery: string;
    sidebarPosition?: SidebarPosition;
    sidebarSize?: SidebarSize;
    isDismissable?: boolean;
    isKeyboardDismissableDisabled?: boolean;
}
