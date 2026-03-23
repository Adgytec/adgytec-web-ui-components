import type { SidebarPosition, SidebarSize } from "@/components/Sidebar/types";
import type { HierarchyItemType } from "@/utils/types";

export interface NavigationSidebarProps {
    items: HierarchyItemType[];
    sidebarPosition?: SidebarPosition;
    sidebarSize?: SidebarSize;
    isDismissable?: boolean;
    isKeyboardDismissableDisabled?: boolean;
}
