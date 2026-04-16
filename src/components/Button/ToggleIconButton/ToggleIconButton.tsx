import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { Tooltip, TooltipTrigger } from "@/components/Tooltip";
import type { ToggleIconButtonProps } from "./types";

export const ToggleIconButton: React.FC<ToggleIconButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    width = "default",
    tooltip,
    ...props
}) => {
    const comp = <AriaToggleButton {...props} />;

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
