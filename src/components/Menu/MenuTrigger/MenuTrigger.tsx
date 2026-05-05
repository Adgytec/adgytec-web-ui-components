import {
    MenuTrigger as AriaMenuTrigger,
    type MenuTriggerProps,
} from "react-aria-components";
import { MenuConfigContext } from "../context";
import type { MenuColor, MenuLayout } from "../core";

export const MenuTrigger: React.FC<
    MenuTriggerProps & {
        color?: MenuColor;
        layout?: MenuLayout;
    }
> = ({ color, layout, ...props }) => {
    return (
        <MenuConfigContext value={{ color, layout }}>
            <AriaMenuTrigger {...props} />
        </MenuConfigContext>
    );
};
