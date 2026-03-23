import type { SidebarPosition, SidebarSize } from "@/components/Sidebar/types";
import type { TreeHierarchyItemType } from "@/utils/types";

export interface NavigationResponsiveProps {
    items: TreeHierarchyItemType[];
    mediaQuery: string;
    sidebarPosition?: SidebarPosition;
    sidebarSize?: SidebarSize;
    isDismissable?: boolean;
    isKeyboardDismissableDisabled?: boolean;
}
