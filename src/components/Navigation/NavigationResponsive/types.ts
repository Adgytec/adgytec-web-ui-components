import type { HierarchyItemType } from "../../../utils/types";
import { SidebarPosition, SidebarSize } from "../../Sidebar/types";

export interface NavigationResponsiveProps {
  items: HierarchyItemType[];
  mediaQuery: string;
  sidebarPosition?: SidebarPosition;
  sidebarSize?: SidebarSize;
  isDismissable?: boolean;
  isKeyboardDismissableDisabled?: boolean;
}
