import { Popover } from "@/components/Popover";

/**
 * Props for the {@link RichTooltipPopover} component.
 * Extends standard {@link Popover} props.
 */
export interface RichTooltipPopoverProps
    extends React.ComponentPropsWithRef<typeof Popover> {}

/**
 * Surface popover container for the {@link RichTooltip} component.
 *
 * Wraps {@link Popover} with two-dimensional scaling (`data-scale-xy`) to animate
 * entrance and exit smoothly along both axes according to Material Design 3 specifications.
 *
 * @example
 * ```tsx
 * import {
 *     Button,
 *     RichTooltip,
 *     RichTooltipInfo,
 *     RichTooltipPopover,
 *     RichTooltipSubhead,
 *     RichTooltipText,
 *     RichTooltipTrigger,
 * } from "@adgytec/web-ui-components";
 *
 * <RichTooltipTrigger>
 *     <Button>More Info</Button>
 *     <RichTooltipPopover>
 *         <RichTooltip>
 *             <RichTooltipInfo>
 *                 <RichTooltipSubhead>Rich Tooltip</RichTooltipSubhead>
 *                 <RichTooltipText>Detailed explanation goes here.</RichTooltipText>
 *             </RichTooltipInfo>
 *         </RichTooltip>
 *     </RichTooltipPopover>
 * </RichTooltipTrigger>
 * ```
 */
export const RichTooltipPopover: React.FC<RichTooltipPopoverProps> = (
    props
) => {
    return <Popover data-scale-xy {...props} />;
};
