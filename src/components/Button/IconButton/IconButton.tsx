import { Button as AriaButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Tooltip, TooltipTrigger } from "@/components/Tooltip";
import type { IconButtonProps } from "./types";

export const IconButton: React.FC<IconButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    width = "default",
    tooltip,
    icon,
    ...props
}) => {
    const comp = (
        <AriaButton {...props}>
            <Icon icon={icon} />
        </AriaButton>
    );

    if (tooltip) {
        return (
            <TooltipTrigger>
                {comp}
                <Tooltip>{tooltip}</Tooltip>
            </TooltipTrigger>
        );
    }
    return comp;
};
