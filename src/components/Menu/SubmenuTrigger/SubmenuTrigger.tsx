import {
    SubmenuTrigger as AriaSubmenuTrigger,
    type SubmenuTriggerProps,
} from "react-aria-components";
import { Popover } from "@/components/Popover";

export const SubmenuTrigger: React.FC<SubmenuTriggerProps> = ({
    children,
    ...props
}) => {
    const [trigger, menu] = children;
    return (
        <AriaSubmenuTrigger {...props}>
            {trigger}
            <Popover>{menu}</Popover>
        </AriaSubmenuTrigger>
    );
};
