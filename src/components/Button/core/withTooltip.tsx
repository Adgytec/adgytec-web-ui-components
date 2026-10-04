import type { ReactNode } from "react";
import { Tooltip, TooltipTrigger } from "@/components/Tooltip";

/**
 * Conditionally wraps a React node in a tooltip trigger when tooltip text is provided.
 *
 * @param node - The React element to display (e.g. button or icon button).
 * @param tooltip - The optional tooltip text to show on hover/focus. If omitted or empty, `node` is returned unwrapped.
 * @returns The wrapped element with tooltip, or the original node if no tooltip was supplied.
 */
export const withTooltip = (node: ReactNode, tooltip?: string) => {
    if (!tooltip) return node;

    return (
        <TooltipTrigger>
            {node}

            <Tooltip>{tooltip}</Tooltip>
        </TooltipTrigger>
    );
};
