import type { NavigationMenuProps } from "./types";
import styles from "./navigationMenu.module.css";
import { MenuLabel } from "../../Menu/MenuLabel";
import { Link } from "@/components/Link/LinkBase/Link";
import { TextButton } from "../../Button/TextButton";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

export const NavigationMenu = ({ items, className }: NavigationMenuProps) => {
  const normalizedItems = items.filter((item) => item.type !== "separator");

  return (
    <div className={className ? className : styles["menu"]}>
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
                theme={item.active ? "primary" : "inverse-surface"}
              >
                {item.node}
              </Link>
            );
          case "button":
            return (
              <TextButton
                key={item.id}
                onPress={item.onPress}
                theme="inverse-surface"
                shape="shrink"
              >
                {item.node}
              </TextButton>
            );
        }
      })}
    </div>
  );
};
