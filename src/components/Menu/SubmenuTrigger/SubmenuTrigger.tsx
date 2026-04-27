import {
    SubmenuTrigger as AriaSubmenuTrigger,
    type SubmenuTriggerProps,
} from "react-aria-components";
import { Popover } from "@/components/Popover";

export const SubmenuTrigger: React.FC<
    SubmenuTriggerProps & {
        offset?: number;
        crossOffset?: number;
    }
> = ({ children, offset = -1, crossOffset, ...props }) => {
    const [trigger, menu] = children;
    return (
        <AriaSubmenuTrigger {...props}>
            {trigger}
            <Popover offset={offset} crossOffset={crossOffset}>
                {menu}
            </Popover>
        </AriaSubmenuTrigger>
    );
};
