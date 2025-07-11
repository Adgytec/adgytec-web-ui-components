import type { HierarchyItemType } from "../../utils/types";

export interface TreeProps {
  items: HierarchyItemType[];
}

export interface RenderTreeProps {
  item: HierarchyItemType;
}
