import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Tooltip, TooltipTrigger } from "@/components/Tooltip";
import type { ToggleIconButtonProps } from "./types";

export const ToggleIconButton: React.FC<ToggleIconButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    width = "default",
    tooltip,
    icon,
    ...props
}) => {
    return (
        <TooltipTrigger isDisabled={!tooltip}>
            <AriaToggleButton {...props}>
                <Icon icon={icon} />
            </AriaToggleButton>

            {tooltip && <Tooltip>{tooltip}</Tooltip>}
        </TooltipTrigger>
    );
};
