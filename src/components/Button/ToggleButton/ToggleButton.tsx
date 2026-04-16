import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { Tooltip, TooltipTrigger } from "@/components/Tooltip";
import type { ToggleButtonProps } from "./types";

export const ToggleButton: React.FC<ToggleButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    tooltip,
    icon,
    ...props
}) => {
    return (
        <TooltipTrigger isDisabled={!tooltip}>
            <AriaToggleButton {...props} />

            {tooltip && <Tooltip>{tooltip}</Tooltip>}
        </TooltipTrigger>
    );
};
