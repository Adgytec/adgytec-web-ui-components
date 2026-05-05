import type { PopoverProps } from "react-aria-components";
import { Popover } from "@/components/Popover";

export const SubmenuPopover: React.FC<PopoverProps> = ({
    offset = -1,
    ...props
}) => {
    return <Popover offset={offset} {...props} />;
};
