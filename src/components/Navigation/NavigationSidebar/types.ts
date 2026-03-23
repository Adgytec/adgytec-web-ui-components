import type { SidebarPosition, SidebarSize } from "@/components/Sidebar/types";
import type { TreeHierarchyItemType } from "@/utils/types";

export interface NavigationSidebarProps {
    items: TreeHierarchyItemType[];
    sidebarPosition?: SidebarPosition;
    sidebarSize?: SidebarSize;
    isDismissable?: boolean;
    isKeyboardDismissableDisabled?: boolean;
}
