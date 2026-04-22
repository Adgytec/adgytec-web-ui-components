import React from "react";
import {
    MenuTrigger as AriaMenuTrigger,
    type MenuTriggerProps,
    Popover,
} from "react-aria-components";

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
