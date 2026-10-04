import clsx from "clsx";
import { useContext } from "react";
import { Menu as AriaMenu } from "react-aria-components";
import { MenuConfigContext } from "../context";
import {
    MenuBaseLayout,
    MenuStyles,
    menuBaseColor,
    menuColorConfig,
    menuLayoutConfig,
} from "../core";
import type { MenuProps } from "./types";

/**
 * Material Design 3 Menu component.
 *
 * Displays a list of choices on a temporary surface when users interact with a button,
 * action, or other control. Supports single/multiple selection, submenus, keyboard navigation,
 * and customizable color schemes and layout densities.
 *
 * @example
 * ```tsx
 * import {
 *     MenuTrigger,
 *     MenuPopover,
 *     Menu,
 *     MenuItem,
 *     Button,
 * } from "@adgytec/web-ui-components";
 * import { Settings, User, LogOut } from "lucide-react";
 *
 * <MenuTrigger>
 *     <Button label="Actions" />
 *     <MenuPopover>
 *         <Menu onAction={(key) => console.log(key)}>
 *             <MenuItem id="profile" label="Profile" leadingIcon={User} />
 *             <MenuItem id="settings" label="Settings" leadingIcon={Settings} />
 *             <MenuItem id="logout" label="Logout" leadingIcon={LogOut} />
 *         </Menu>
 *     </MenuPopover>
 * </MenuTrigger>
 * ```
 */
export const Menu = <T extends object>({
    color,
    layout,
    className,
    ...props
}: MenuProps<T>) => {
    const { color: configColor, layout: configLayout } =
        useContext(MenuConfigContext);
    const menuColor = color ?? configColor ?? "standard";
    const menuLayout = layout ?? configLayout ?? "standard";

    return (
        <AriaMenu
            className={(renderProps) =>
                clsx(
                    menuColorConfig(menuColor),
                    menuBaseColor,
                    MenuBaseLayout,
                    menuLayoutConfig(menuLayout),
                    MenuStyles,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-layout={layout}
            data-menu
        />
    );
};
