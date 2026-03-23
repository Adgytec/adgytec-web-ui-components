import type { TreeHierarchyItemType } from "@/utils/types";

export interface TreeProps {
    items: TreeHierarchyItemType[];
}

export interface RenderTreeProps {
    item: TreeHierarchyItemType;
}
