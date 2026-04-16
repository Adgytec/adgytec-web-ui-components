import { Button as AriaButton } from "react-aria-components";
import { Tooltip, TooltipTrigger } from "@/components/Tooltip";
import type { IconButtonProps } from "./types";

export const IconButton: React.FC<IconButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    width = "default",
    tooltip,
    ...props
}) => {
    const comp = <AriaButton {...props} />;

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
