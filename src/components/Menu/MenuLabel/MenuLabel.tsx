import clsx from "clsx";
import { Button } from "react-aria-components";
import { Menu } from "@/components/Menu/MenuBase/Menu";
import type { MenuLabelProps } from "@/components/Menu/MenuBase/types";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import styles from "./menuLabel.module.css";

export const MenuLabel = ({
    children,
    menuItems,
    description,
    triggerType,
    cardBackground,
}: MenuLabelProps) => {
    return (
        <Menu
            menuItems={menuItems}
            triggerType={triggerType}
            cardBackground={cardBackground}
        >
            <Tooltip description={description}>
                <Button type="button" className={clsx(styles["pressable"])}>
                    {children}
                </Button>
            </Tooltip>
        </Menu>
    );
};
