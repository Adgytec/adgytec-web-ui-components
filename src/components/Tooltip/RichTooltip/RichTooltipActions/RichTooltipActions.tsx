import clsx from "clsx";
import styles from "./richTooltipActions.module.css";

/**
 * Props for the {@link RichTooltipActions} component.
 * Extends standard `HTMLDivElement` attributes.
 */
export interface RichTooltipActionsProps
    extends React.ComponentPropsWithRef<"div"> {}

/**
 * Action button container for a {@link RichTooltip}.
 *
 * Renders action elements at the bottom of the rich tooltip with proper horizontal alignment and spacing.
 * Recommended to contain buttons with `size="small"` and `color="text"`.
 *
 * @example
 * ```tsx
 * import { Button, RichTooltipActions } from "@adgytec/web-ui-components";
 *
 * export function Example() {
 *     return (
 *         <RichTooltipActions>
 *             <Button label="Dismiss" size="small" color="text" />
 *             <Button label="Learn More" size="small" color="text" />
 *         </RichTooltipActions>
 *     );
 * }
 * ```
 */
export const RichTooltipActions: React.FC<RichTooltipActionsProps> = ({
    className,
    ...props
}) => {
    return <div className={clsx(styles["actions"], className)} {...props} />;
};
