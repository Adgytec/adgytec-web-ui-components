import { MenuTrigger as AriaMenuTrigger } from "react-aria-components";
import { Popover } from "@/components/Popover";
import type { MenuTriggerProps } from "./types";

export const MenuTrigger: React.FC<MenuTriggerProps> = ({
    triggerElement,
    children,
    offset,
    crossOffset,
    ...props
}) => {
    return (
        <AriaMenuTrigger {...props}>
            {triggerElement}
            <Popover offset={offset} crossOffset={crossOffset}>
                {children}
            </Popover>
        </AriaMenuTrigger>
    );
};
