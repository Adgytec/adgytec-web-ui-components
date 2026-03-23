import { Menu } from "@/components/Menu/MenuBase/Menu";
import type { MenuButtonProps } from "@/components/Menu/MenuBase/types";

export const MenuButton = ({
    children,
    menuItems,
    triggerType,
}: MenuButtonProps) => {
    return (
        <Menu menuItems={menuItems} triggerType={triggerType}>
            {children}
        </Menu>
    );
};
