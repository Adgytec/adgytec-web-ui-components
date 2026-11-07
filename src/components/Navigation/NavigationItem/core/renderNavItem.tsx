import clsx from "clsx";
import type { ReactNode } from "react";
import { Tooltip, TooltipTrigger } from "@/components/Tooltip";
import type { Variant } from "../../core";
import {
    NavigationItemCollapsedStyles,
    navigationItemLabelTypography,
} from "./navigationItem";

/**
 * Helper to render a navigation item according to the active navigation variant.
 *
 * In `"expanded"` variant, returns the interactive node directly with standard inline layout.
 * In `"collapsed"` variant, wraps the interactive node inside a [`TooltipTrigger`](src/components/Tooltip/TooltipTrigger/TooltipTrigger.tsx)
 * with a [`Tooltip`](src/components/Tooltip/Tooltip/Tooltip.tsx) displaying the item's label on hover/focus, and appends a compact text label beneath the icon.
 *
 * @param node - The interactive item element (e.g. `Link` or `Button`).
 * @param label - The label content used for the tooltip and collapsed label.
 * @param variant - The navigation display variant (`"expanded"` or `"collapsed"`).
 * @returns The rendered React node formatted for the active variant.
 */
export const renderNavItem = (
    node: ReactNode,
    label: ReactNode,
    variant: Variant
) => {
    if (variant === "expanded") {
        return node;
    }

    return (
        <span
            className={clsx(
                NavigationItemCollapsedStyles,
                navigationItemLabelTypography(variant)
            )}
        >
            <TooltipTrigger>
                {node}

                <Tooltip>{label}</Tooltip>
            </TooltipTrigger>

            <span data-label>{label}</span>
        </span>
    );
};
