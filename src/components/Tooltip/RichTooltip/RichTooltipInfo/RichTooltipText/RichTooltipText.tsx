import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";

/**
 * Props for the {@link RichTooltipText} component.
 * Extends React Aria Components `Text` props.
 */
export interface RichTooltipTextProps
    extends React.ComponentPropsWithRef<typeof Text> {}

/**
 * Body text component for a {@link RichTooltip}.
 *
 * Extends React Aria Components `Text` and styles the body copy using
 * Material 3 `typography.bodyMedium`.
 *
 * @example
 * ```tsx
 * import { RichTooltipText } from "@adgytec/web-ui-components";
 *
 * export function Example() {
 *     return (
 *         <RichTooltipText>
 *             Rich tooltips provide additional context and details.
 *         </RichTooltipText>
 *     );
 * }
 * ```
 */
export const RichTooltipText: React.FC<RichTooltipTextProps> = ({
    className,
    ...props
}) => {
    return (
        <Text className={clsx(typography.bodyMedium, className)} {...props} />
    );
};
