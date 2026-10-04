import type { ReactNode } from "react";
import { Tooltip, TooltipTrigger } from "@/components/Tooltip";

export const withTooltip = (node: ReactNode, tooltip?: string) => {
    if (!tooltip) return node;

    return (
        <TooltipTrigger>
            {node}

            <Tooltip>{tooltip}</Tooltip>
        </TooltipTrigger>
    );
};
