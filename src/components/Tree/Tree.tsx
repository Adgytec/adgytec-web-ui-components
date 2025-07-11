import {
  Tree as UnstyledTree,
  TreeItem,
  TreeItemContent,
} from "react-aria-components";
import styles from "./tree.module.css";
import type { TreeItemType, TreeProps } from "./types";
import { ChevronRight } from "lucide-react";

const Tree = ({ items }: TreeProps) => {
  const renderTree = (item: TreeItemType) => {
    const isLink = item.type === "link";
    const isButton = item.type === "button";
    const isNode = item.type === "node";

    return (
      <TreeItem
        key={item.id}
        textValue={item.id}
        target={item.target}
        onAction={item.onPress}
        href={item.href}
        className={styles["tree-item"]}
        {...(isLink && { "data-link": true })}
        {...(isButton && { "data-button": true })}
        {...(isNode && { "data-node": true })}
      >
        <TreeItemContent>
          {item.value}

          {item.children && <ChevronRight strokeWidth={3} />}
        </TreeItemContent>

        {item.children &&
          item.children.map((childItem) => {
            return renderTree(childItem);
          })}
      </TreeItem>
    );
  };

  return (
    <UnstyledTree className={styles["tree"]}>
      {items.map((item) => {
        return renderTree(item);
      })}
    </UnstyledTree>
  );
};

export default Tree;
