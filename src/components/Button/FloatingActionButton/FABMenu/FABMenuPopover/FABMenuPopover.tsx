import { Popover } from "@/components/Popover";

export const FABMenuPopover: React.FC<
    React.ComponentPropsWithRef<typeof Popover>
> = ({ placement = "top end", ...props }) => {
    return <Popover placement={placement} {...props} />;
};
