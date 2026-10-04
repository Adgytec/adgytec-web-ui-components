import clsx from "clsx";
import styles from "./richTooltipInfo.module.css";

/**
 * Props for the {@link RichTooltipInfo} component.
 * Extends standard `HTMLDivElement` attributes.
 */
export interface RichTooltipInfoProps
    extends React.ComponentPropsWithRef<"div"> {}

/**
 * Text content container for a {@link RichTooltip}.
 *
 * Houses the {@link RichTooltipSubhead} title and {@link RichTooltipText} description
 * with proper Material 3 padding and spacing.
 *
 * @example
 * ```tsx
 * import {
 *     RichTooltipInfo,
 *     RichTooltipSubhead,
 *     RichTooltipText,
 * } from "@adgytec/web-ui-components";
 *
 * export function Example() {
 *     return (
 *         <RichTooltipInfo>
 *             <RichTooltipSubhead>Header Title</RichTooltipSubhead>
 *             <RichTooltipText>Informative description goes here.</RichTooltipText>
 *         </RichTooltipInfo>
 *     );
 * }
 * ```
 */
export const RichTooltipInfo: React.FC<RichTooltipInfoProps> = ({
    className,
    ...props
}) => {
    return <div className={clsx(styles["info"], className)} {...props} />;
};
