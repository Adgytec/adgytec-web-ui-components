import { TooltipTrigger as AriaTooltipTrigger } from "react-aria-components";

/**
 * Props for the {@link TooltipTrigger} component.
 * Extends React Aria Components `TooltipTrigger` props.
 */
export interface TooltipTriggerProps
    extends React.ComponentPropsWithRef<typeof AriaTooltipTrigger> {}

/**
 * Wraps an interactive trigger element (such as a button) and a {@link Tooltip}
 * to manage hover, focus, and long-press display states.
 *
 * Extends React Aria Components `TooltipTrigger` with default Material 3 delays:
 * - `delay = 250` (milliseconds before opening on hover/focus)
 * - `closeDelay = 150` (milliseconds before closing after pointer leaves)
 *
 * @example
 * ```tsx
 * import { Button, Tooltip, TooltipTrigger } from "@adgytec/web-ui-components";
 *
 * export function Example() {
 *     return (
 *         <TooltipTrigger>
 *             <Button label="Hover me" />
 *             <Tooltip>Helpful information</Tooltip>
 *         </TooltipTrigger>
 *     );
 * }
 * ```
 */
export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({
    delay = 250,
    closeDelay = 150,
    ...props
}) => {
    return (
        <AriaTooltipTrigger delay={delay} closeDelay={closeDelay} {...props} />
    );
};
