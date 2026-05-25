import { MenuTrigger as AriaMenuTrigger } from "react-aria-components";
import { MenuConfigContext } from "../context";
import type { MenuColor, MenuLayout } from "../core";

export const MenuTrigger: React.FC<
    React.ComponentPropsWithRef<typeof AriaMenuTrigger> & {
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
