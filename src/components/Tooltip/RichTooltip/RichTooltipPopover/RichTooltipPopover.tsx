import { Popover } from "@/components/Popover";

export const RichTooltipPopover: React.FC<
    React.ComponentPropsWithRef<typeof Popover>
> = (props) => {
    return <Popover data-scale-xy {...props} />;
};
