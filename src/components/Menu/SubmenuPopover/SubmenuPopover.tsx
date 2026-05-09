import { Popover } from "@/components/Popover";

export const SubmenuPopover: React.FC<
    React.ComponentPropsWithRef<typeof Popover>
> = ({ offset = -1, ...props }) => {
    return <Popover offset={offset} {...props} />;
};
