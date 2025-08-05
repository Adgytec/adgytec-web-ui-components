import type { HierarchyItemType } from "@/utils/types";
import { SidebarPosition, SidebarSize } from "@/components/Sidebar/types";

export interface NavigationSidebarProps {
  items: HierarchyItemType[];
  sidebarPosition?: SidebarPosition;
  sidebarSize?: SidebarSize;
  isDismissable?: boolean;
  isKeyboardDismissableDisabled?: boolean;
}
