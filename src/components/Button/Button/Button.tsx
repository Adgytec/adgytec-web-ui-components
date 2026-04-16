import { Button as AriaButton } from "react-aria-components";
import { Tooltip, TooltipTrigger } from "@/components/Tooltip";
import type { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
    size = "small",
    shape = "round",
    color = "filled",
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
