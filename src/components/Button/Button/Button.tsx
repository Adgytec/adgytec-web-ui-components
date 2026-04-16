import { Button as AriaButton } from "react-aria-components";
import { Tooltip, TooltipTrigger } from "@/components/Tooltip";
import type { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
    tooltip,
    icon,
    ...props
}) => {
    return (
        <TooltipTrigger>
            <AriaButton {...props} />

            {tooltip && <Tooltip>{tooltip}</Tooltip>}
        </TooltipTrigger>
    );
};
