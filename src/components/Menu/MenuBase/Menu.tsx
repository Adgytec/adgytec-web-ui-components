import { clsx } from "clsx";
import { ChevronRight } from "lucide-react";
import {
    MenuItem,
    MenuTrigger,
    SubmenuTrigger,
    Menu as UnstyledMenu,
} from "react-aria-components";
import { BaseCard } from "@/components/Card/BaseCard";
import { Popover } from "@/components/Popover/PopoverBase";
import { Separator } from "@/components/Separator/Separator";
import styles from "./menu.module.css";
import type { MenuProps, RenderMenuProps } from "./types";

const RenderMenu = ({ menuItem, cardBackground }: RenderMenuProps) => {
    if (menuItem.type === "separator") {
        return <Separator />;
    }

    const hasSubmenu = !!menuItem.subItems && menuItem.subItems.length > 0;
    const menuComp = (
        <MenuItem
            className={clsx(styles["menu-item"], styles[menuItem.type])}
            onAction={menuItem.onPress}
            href={menuItem.href}
            target={menuItem.target}
        >
            {menuItem.node}

            {hasSubmenu && <ChevronRight />}
        </MenuItem>
    );

    if (!hasSubmenu) return menuComp;

    return (
        <SubmenuTrigger>
            {menuComp}
            <Popover>
                <BaseCard background={cardBackground}>
                    <UnstyledMenu className={clsx(styles["menu"])}>
                        {menuItem.subItems.map((subMenu) => {
                            return (
                                <RenderMenu
                                    key={subMenu.id}
                                    menuItem={subMenu}
                                    cardBackground={cardBackground}
                                />
                            );
                        })}
                    </UnstyledMenu>
                </BaseCard>
            </Popover>
        </SubmenuTrigger>
    );
};

export const Menu = ({
    children,
    menuItems,
    triggerType = "press",
    cardBackground = "solid",
}: MenuProps) => {
    return (
        <MenuTrigger trigger={triggerType}>
            {children}
            <Popover>
                <BaseCard background={cardBackground}>
                    <UnstyledMenu className={clsx(styles["menu"])}>
                        {menuItems.map((item) => {
                            return (
                                <RenderMenu
                                    key={item.id}
                                    cardBackground={cardBackground}
                                    menuItem={item}
                                />
                            );
                        })}
                    </UnstyledMenu>
                </BaseCard>
            </Popover>
        </MenuTrigger>
    );
};
