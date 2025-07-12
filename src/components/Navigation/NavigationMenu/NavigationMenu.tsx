import type { NavigationMenuProps } from "./types";
import styles from "./navigationMenu.module.css";
import MenuLabel from "../../Menu/MenuLabel";
import Link from "../../Link/Link";
import TextButton from "../../Button/TextButton";
import { ColorTheme } from "../../../utils/types";
import { ButtonShape } from "../../Button/types";
import { ChevronDown } from "lucide-react";

const NavigationMenu = ({ items, className }: NavigationMenuProps) => {
  const normalizedItems = items.filter((item) => item.type !== "separator");

  return (
    <div className={className ? className : styles["menu"]}>
      {normalizedItems.map((item) => {
        switch (item.type) {
          case "sub-items":
            return (
              <MenuLabel key={item.id} menuItems={item.subItems}>
                {item.node}
                <ChevronDown strokeWidth={3} />
              </MenuLabel>
            );
          case "item-node":
            return item.node;
          case "link":
            return (
              <Link
                href={item.href}
                target={item.target}
                underline={item.active}
                theme={
                  item.active ? ColorTheme.primary : ColorTheme.inverseSurface
                }
              >
                {item.node}
              </Link>
            );
          case "button":
            return (
              <TextButton
                onPress={item.onPress}
                theme={ColorTheme.inverseSurface}
                shape={ButtonShape.shrink}
              >
                {item.node}
              </TextButton>
            );
        }
      })}
    </div>
  );
};

export default NavigationMenu;
