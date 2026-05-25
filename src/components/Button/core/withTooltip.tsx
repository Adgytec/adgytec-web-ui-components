import type { ReactElement } from "react";
import { Tooltip, TooltipTrigger } from "@/components/Tooltip";

export const withTooltip = (element: ReactElement, tooltip?: string) => {
    if (!tooltip) return element;

    return (
        <TooltipTrigger>
            {element}

            <Tooltip>{tooltip}</Tooltip>
        </TooltipTrigger>
    );
};
