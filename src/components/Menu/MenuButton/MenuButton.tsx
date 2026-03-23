import { Menu } from "@/components/Menu/MenuBase/Menu";
import type { MenuButtonProps } from "@/components/Menu/MenuBase/types";

export const MenuButton = ({
    children,
    menuItems,
    triggerType,
    cardBackground,
}: MenuButtonProps) => {
    return (
        <Menu
            menuItems={menuItems}
            triggerType={triggerType}
            cardBackground={cardBackground}
        >
            {children}
        </Menu>
    );
};
