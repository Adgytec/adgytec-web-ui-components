// TODO: better way to handle this

import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";
import { Button } from "@/components/Button";
import { Link } from "@/components/Link";
import { MenuLabel } from "../../Menu/MenuLabel";
import styles from "./navigationMenu.module.css";
import type { NavigationMenuProps } from "./types";

export const NavigationMenu = ({ items, className }: NavigationMenuProps) => {
    const normalizedItems = items.filter((item) => item.type !== "separator");

    return (
        <div className={clsx(styles["menu"], className)}>
            {normalizedItems.map((item) => {
                switch (item.type) {
                    case "sub-items":
                        return (
                            <MenuLabel key={item.id} menuItems={item.subItems}>
                                {item.node}
                                <ChevronDown />
                            </MenuLabel>
                        );
                    case "item-node":
                        return <Fragment key={item.id}>{item.node}</Fragment>;
                    case "link":
                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                target={item.target}
                                underline={item.active}
                                theme={
                                    item.active ? "primary" : "inverse-surface"
                                }
                            >
                                {item.node}
                            </Link>
                        );
                    case "button":
                        return (
                            <Button
                                variant="text"
                                key={item.id}
                                onPress={item.onPress}
                                theme="inverse-surface"
                                shape="shrink"
                            >
                                {item.node}
                            </Button>
                        );
                    default:
                        return <Fragment key={"never"}></Fragment>;
                }
            })}
        </div>
    );
};
