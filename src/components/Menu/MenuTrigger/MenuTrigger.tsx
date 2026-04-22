import React from "react";
import {
    MenuTrigger as AriaMenuTrigger,
    type MenuTriggerProps,
} from "react-aria-components";
import { Popover } from "@/components/Popover";

export const MenuTrigger: React.FC<MenuTriggerProps> = ({
    children,
    ...props
}) => {
    const [trigger, menu] = React.Children.toArray(children);

    return (
        <AriaMenuTrigger {...props}>
            {trigger}
            <Popover>{menu}</Popover>
        </AriaMenuTrigger>
    );
};
