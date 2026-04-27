import { MenuTrigger as AriaMenuTrigger } from "react-aria-components";
import { Popover } from "@/components/Popover";
import type { MenuTriggerProps } from "./types";

export const MenuTrigger: React.FC<MenuTriggerProps> = ({
    triggerElement,
    children,
    ...props
}) => {
    return (
        <AriaMenuTrigger {...props}>
            {triggerElement}
            <Popover offset={-1}>{children}</Popover>
        </AriaMenuTrigger>
    );
};
