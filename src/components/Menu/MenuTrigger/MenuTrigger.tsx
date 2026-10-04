import { MenuTrigger as AriaMenuTrigger } from "react-aria-components";
import { MenuConfigContext } from "../context";
import type { MenuColor, MenuLayout } from "../core";

/**
 * Props for the [`MenuTrigger`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuTrigger/MenuTrigger.tsx) component.
 */
export interface MenuTriggerProps
    extends React.ComponentPropsWithRef<typeof AriaMenuTrigger> {
    /**
     * Sets the default color scheme for child menus.
     *
     * @default "standard"
     */
    color?: MenuColor;

    /**
     * Sets the default layout density for child menus.
     *
     * @default "standard"
     */
    layout?: MenuLayout;
}

/**
 * Container component that manages menu visibility and trigger interaction states.
 *
 * Wraps React Aria's `MenuTrigger` and provides [`MenuConfigContext`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/context/context.ts)
 * to configure the color scheme and layout density across descendant [`Menu`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/Menu/Menu.tsx) components.
 *
 * @example
 * ```tsx
 * import {
 *     MenuTrigger,
 *     Button,
 *     MenuPopover,
 *     Menu,
 *     MenuItem,
 * } from "@adgytec/web-ui-components";
 *
 * <MenuTrigger color="vibrant">
 *     <Button label="Open Menu" />
 *     <MenuPopover>
 *         <Menu>
 *             <MenuItem label="Item 1" />
 *             <MenuItem label="Item 2" />
 *         </Menu>
 *     </MenuPopover>
 * </MenuTrigger>
 * ```
 */
export const MenuTrigger: React.FC<MenuTriggerProps> = ({
    color,
    layout,
    ...props
}) => {
    return (
        <MenuConfigContext value={{ color, layout }}>
            <AriaMenuTrigger {...props} />
        </MenuConfigContext>
    );
};
