// TODO: better api

import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import {
    TreeItem,
    TreeItemContent,
    Tree as UnstyledTree,
} from "react-aria-components";
import styles from "./tree.module.css";
import type { RenderTreeProps, TreeProps } from "./types";

const RenderTree = ({ item }: RenderTreeProps) => {
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
            className={clsx(styles["tree-item"])}
            {...(isLink && { "data-link": true })}
            {...(isButton && { "data-button": true })}
            {...(isNode && { "data-node": true })}
            {...(isActive && { "data-active": true })}
        >
            <TreeItemContent>
                {item.node}

                {item.subItems && <ChevronRight />}
            </TreeItemContent>

            {item.subItems?.map((subItem) => (
                <RenderTree key={subItem.id} item={subItem} />
            ))}
        </TreeItem>
    );
};

export const Tree = ({ items }: TreeProps) => {
    return (
        <UnstyledTree className={clsx(styles["tree"])}>
            {items.map((item) => {
                return <RenderTree key={item.id} item={item} />;
            })}
        </UnstyledTree>
    );
};
