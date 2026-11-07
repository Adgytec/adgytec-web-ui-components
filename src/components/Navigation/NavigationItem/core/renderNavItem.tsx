import clsx from "clsx";
import type { ReactNode } from "react";
import { Tooltip, TooltipTrigger } from "@/components/Tooltip";
import type { Variant } from "../../core";
import {
    NavigationItemCollapsedStyles,
    navigationItemLabelTypography,
} from "./navigationItem";

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
