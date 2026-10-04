// https://m3.material.io/components/tooltips/guidelines#00e87770-86d0-436d-b50b-436ff3cefe75
// use this with popover, for more details read the article

import clsx from "clsx";
import styles from "./richTooltip.module.css";

/**
 * Props for the {@link RichTooltip} component.
 * Extends standard `HTMLDivElement` attributes.
 *
 * Configurable CSS tokens:
 * - `--md-rich-tooltip-background`: Background color of the rich tooltip (`var(--md-sys-color-surface-container)`).
 * - `--md-rich-tooltip-color`: Text color of the rich tooltip (`var(--md-sys-color-on-surface-variant)`).
 */
export interface RichTooltipProps extends React.ComponentPropsWithRef<"div"> {}

/**
 * Container component implementing [Material 3 Rich Tooltips](https://m3.material.io/components/tooltips/overview#89f33800-4f51-4043-9884-219159f427f7).
 *
 * Rich tooltips provide contextual information, descriptive subheads, body copy, and optional actions.
 * Typically rendered inside a `Popover` component triggered by a `DialogTrigger`.
 *
 * Configurable CSS tokens:
 * - `--md-rich-tooltip-background`: Background color of the rich tooltip (`var(--md-sys-color-surface-container)`).
 * - `--md-rich-tooltip-color`: Text color of the rich tooltip (`var(--md-sys-color-on-surface-variant)`).
 *
 * @example
 * ```tsx
 * import {
 *     Button,
 *     Popover,
 *     RichTooltip,
 *     RichTooltipActions,
 *     RichTooltipInfo,
 *     RichTooltipSubhead,
 *     RichTooltipText,
 * } from "@adgytec/web-ui-components";
 * import { DialogTrigger } from "react-aria-components";
 *
 * export function Example() {
 *     return (
 *         <DialogTrigger>
 *             <Button label="More Info" />
 *             <Popover>
 *                 <RichTooltip>
 *                     <RichTooltipInfo>
 *                         <RichTooltipSubhead>Feature Overview</RichTooltipSubhead>
 *                         <RichTooltipText>
 *                             Detailed explanation of this feature and its benefits.
 *                         </RichTooltipText>
 *                     </RichTooltipInfo>
 *                     <RichTooltipActions>
 *                         <Button label="Learn More" size="small" color="text" />
 *                     </RichTooltipActions>
 *                 </RichTooltip>
 *             </Popover>
 *         </DialogTrigger>
 *     );
 * }
 * ```
 */
export const RichTooltip: React.FC<RichTooltipProps> = ({
    className,
    ...props
}) => {
    return (
        <div
            className={clsx(styles["tooltip"], className)}
            {...props}
            data-rich-tooltip
        />
    );
};
