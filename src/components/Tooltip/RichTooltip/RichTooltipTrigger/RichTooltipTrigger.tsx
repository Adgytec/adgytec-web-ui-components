import { PreviewTrigger } from "react-aria-components";

/**
 * Props for the {@link RichTooltipTrigger} component.
 * Extends React Aria Components `PreviewTrigger` props.
 */
export interface RichTooltipTriggerProps
    extends React.ComponentPropsWithRef<typeof PreviewTrigger> {}

/**
 * Wraps an interactive trigger element (such as a button) and a `Popover` containing a {@link RichTooltip}
 * to manage hover, focus, and long-press display states.
 *
 * Unlike standard tooltips, rich tooltips can contain interactive content such as buttons and links.
 *
 * Extends React Aria Components `PreviewTrigger` with default Material 3 delays:
 * - `delay = 250` (milliseconds before opening on hover/focus)
 * - `closeDelay = 150` (milliseconds before closing after pointer leaves)
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
 *     RichTooltipTrigger,
 * } from "@adgytec/web-ui-components";
 *
 * export function Example() {
 *     return (
 *         <RichTooltipTrigger>
 *             <Button label="Rich Tooltip" />
 *             <Popover>
 *                 <RichTooltip>
 *                     <RichTooltipInfo>
 *                         <RichTooltipSubhead>Rich Tooltip</RichTooltipSubhead>
 *                         <RichTooltipText>
 *                             Rich tooltips provide more contextual information than plain tooltips.
 *                         </RichTooltipText>
 *                     </RichTooltipInfo>
 *                     <RichTooltipActions>
 *                         <Button label="Action" size="small" color="text" />
 *                     </RichTooltipActions>
 *                 </RichTooltip>
 *             </Popover>
 *         </RichTooltipTrigger>
 *     );
 * }
 * ```
 */
export const RichTooltipTrigger: React.FC<RichTooltipTriggerProps> = ({
    delay = 250,
    closeDelay = 150,
    ...props
}) => {
    return <PreviewTrigger delay={delay} closeDelay={closeDelay} {...props} />;
};
