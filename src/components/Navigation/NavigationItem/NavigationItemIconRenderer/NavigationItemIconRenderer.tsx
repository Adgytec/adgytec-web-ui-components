import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/Icon";

const IconRenderer: React.FC<{ icon: LucideIcon }> = ({ icon }) => {
    return <Icon icon={icon} size={24} data-nav-icon />;
};

/**
 * Props for the [`NavigationItemIconRenderer`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationItem/NavigationItemIconRenderer/NavigationItemIconRenderer.tsx) component.
 */
export interface NavigationItemIconRendererProps {
    /**
     * Icon displayed when the item is in its inactive/resting state.
     */
    icon?: LucideIcon;

    /**
     * Alternate icon displayed when the item is active.
     */
    activeIcon?: LucideIcon;

    /**
     * Whether the parent navigation item is currently active.
     */
    isActive?: boolean;
}

/**
 * Internal icon renderer for navigation items.
 *
 * Renders a standard 24px icon with automatic fallback between `activeIcon` (when `isActive` is true)
 * and the resting `icon`.
 */
export const NavigationItemIconRenderer: React.FC<
    NavigationItemIconRendererProps
> = ({ icon, activeIcon, isActive }) => {
    if (isActive) {
        if (activeIcon) return <IconRenderer icon={activeIcon} />;
        if (icon) return <IconRenderer icon={icon} />;

        return null;
    }

    if (icon) return <IconRenderer icon={icon} />;
    return null;
};
