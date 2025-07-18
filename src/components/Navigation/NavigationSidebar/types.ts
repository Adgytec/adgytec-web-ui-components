import type { HierarchyItemType } from "../../../utils/types";
import { SidebarPosition, SidebarSize } from "../../Sidebar/types";

export interface NavigationSidebarProps {
  items: HierarchyItemType[];
  sidebarPosition?: SidebarPosition;
  sidebarSize?: SidebarSize;
  isDismissable?: boolean;
  isKeyboardDismissableDisabled?: boolean;
}
