import clsx from "clsx";
import { Tooltip as AriaTooltip } from "react-aria-components";
import { typography } from "@/utils/typography";
import styles from "./tooltip.module.css";

/**
 * Props for the {@link Tooltip} component.
 * Extends React Aria Components `Tooltip` props.
 *
 * Configurable CSS tokens:
 * - `--md-tooltip-background`: Background color of the tooltip (`var(--md-sys-color-inverse-surface)`).
 * - `--md-tooltip-color`: Text color of the tooltip (`var(--md-sys-color-inverse-on-surface)`).
 */
export interface TooltipProps
    extends React.ComponentPropsWithRef<typeof AriaTooltip> {}

/**
 * Plain tooltip component implementing [Material 3 Tooltips](https://m3.material.io/components/tooltips/overview).
 *
 * Provides brief, informative text messages when hovering, focusing, or long-pressing an element.
 * Supports smooth directional entrance/exit slide transitions and opacity fading based on `data-placement`.
 *
 * Configurable CSS tokens:
 * - `--md-tooltip-background`: Background color of the tooltip (`var(--md-sys-color-inverse-surface)`).
 * - `--md-tooltip-color`: Text color of the tooltip (`var(--md-sys-color-inverse-on-surface)`).
 *
 * @example
 * ```tsx
 * import { Button, Tooltip, TooltipTrigger } from "@adgytec/web-ui-components";
 *
 * export function Example() {
 *     return (
 *         <TooltipTrigger>
 *             <Button label="Save Changes" />
 *             <Tooltip placement="top">Saves the current document</Tooltip>
 *         </TooltipTrigger>
 *     );
 * }
 * ```
 */
export const Tooltip: React.FC<TooltipProps> = ({
    className,
    offset = 4,
    ...props
}) => {
    return (
        <AriaTooltip
            offset={offset}
            className={(renderProps) =>
                clsx(
                    styles["tooltip"],
                    typography.labelMedium,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-tooltip
        />
    );
};
