import { Popover } from "@/components/Popover";

export const FABMenuPopover: React.FC<
    Omit<
        React.ComponentPropsWithRef<typeof Popover>,
        "placement" | "shouldFlip"
    >
> = ({ ...props }) => {
    return (
        <Popover
            shouldFlip={false}
            placement="top end"
            {...props}
            data-scale-xy
        />
    );
};
