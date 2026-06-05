import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/Icon";

const IconRenderer: React.FC<{ icon: LucideIcon }> = ({ icon }) => {
    return <Icon icon={icon} size={24} data-nav-icon />;
};

export const NavigationItemIconRenderer: React.FC<{
    icon?: LucideIcon;
    activeIcon?: LucideIcon;
    isActive?: boolean;
}> = ({ icon, activeIcon, isActive }) => {
    if (isActive) {
        if (activeIcon) return <IconRenderer icon={activeIcon} />;
        if (icon) return <IconRenderer icon={icon} />;

        return null;
    }

    if (icon) return <IconRenderer icon={icon} />;
    return null;
};
