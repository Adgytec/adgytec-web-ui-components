import {
  Tree as UnstyledTree,
  TreeItem,
  TreeItemContent,
} from "react-aria-components";
import styles from "./tree.module.css";
import type { RenderTreeProps, TreeProps } from "./types";
import { ChevronRight } from "lucide-react";

const RenderTree = ({ item }: RenderTreeProps) => {
  if (item.type === "separator") return <></>;

  const isLink = item.type === "link";
  const isButton = item.type === "button";
  const isNode = item.type === "item-node";
  const isActive = item.active;

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
      {...(isActive && { "data-active": true })}
    >
      <TreeItemContent>
        {item.node}

        {item.subItems && <ChevronRight strokeWidth={3} />}
      </TreeItemContent>

      {item.subItems &&
        item.subItems.map((subItem) => {
          return <RenderTree key={subItem.id} item={subItem} />;
        })}
    </TreeItem>
  );
};

export const Tree = ({ items }: TreeProps) => {
  return (
    <UnstyledTree className={styles["tree"]}>
      {items.map((item) => {
        return <RenderTree key={item.id} item={item} />;
      })}
    </UnstyledTree>
  );
};
