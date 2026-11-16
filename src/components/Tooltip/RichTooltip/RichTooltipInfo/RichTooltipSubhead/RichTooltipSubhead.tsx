import clsx from "clsx";
import { Heading } from "react-aria-components";
import { typography } from "@/utils";

/**
 * Props for the {@link RichTooltipSubhead} component.
 * Extends React Aria Components `Heading` props.
 */
export interface RichTooltipSubheadProps
    extends React.ComponentPropsWithRef<typeof Heading> {}

/**
 * Heading title component for a {@link RichTooltip}.
 *
 * Extends React Aria Components `Heading` and styles the title text using
 * Material 3 `typography.titleSmall`.
 *
 * @example
 * ```tsx
 * import { RichTooltipSubhead } from "@adgytec/web-ui-components";
 *
 * export function Example() {
 *     return <RichTooltipSubhead>New Feature Available</RichTooltipSubhead>;
 * }
 * ```
 */
export const RichTooltipSubhead: React.FC<RichTooltipSubheadProps> = ({
    level = 3,
    className,
    ...props
}) => {
    return (
        <Heading
            level={level}
            className={clsx(typography.titleSmall, className)}
            {...props}
        />
    );
};
