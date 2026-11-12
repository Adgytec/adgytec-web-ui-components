import clsx from "clsx";
import { DisclosureGroup as AriaDisclosureGroup } from "react-aria-components";
import styles from "./disclosureGroup.module.css";

/**
 * Props for the {@link DisclosureGroup} component.
 * Extends React Aria's {@link AriaDisclosureGroup} props.
 */
export interface DisclosureGroupProps
    extends React.ComponentPropsWithRef<typeof AriaDisclosureGroup> {}

/**
 * An accordion grouping container for managing multiple related {@link Disclosure} sections.
 *
 * Supports single or multi-expansion modes via React Aria props (`allowsMultipleExpanded`),
 * coordinates keyboard navigation between items, and provides shared typography tokens
 * to all descendant disclosure headers and panels.
 *
 * @example
 * ```tsx
 * import {
 *     DisclosureGroup,
 *     Disclosure,
 *     DisclosureHeader,
 *     DisclosurePanel,
 *     typography
 * } from '@adgytec/web-ui-components';
 *
 * <DisclosureGroup
 *     allowsMultipleExpanded
 *     labelTypography={typography.titleMedium}
 *     panelTypography={typography.bodyMedium}
 * >
 *     <Disclosure id="step-1">
 *         <DisclosureHeader>Step 1: Account Info</DisclosureHeader>
 *         <DisclosurePanel>Enter your username and password.</DisclosurePanel>
 *     </Disclosure>
 *     <Disclosure id="step-2">
 *         <DisclosureHeader>Step 2: Profile Details</DisclosureHeader>
 *         <DisclosurePanel>Upload an avatar and bio.</DisclosurePanel>
 *     </Disclosure>
 * </DisclosureGroup>
 * ```
 */
export const DisclosureGroup: React.FC<DisclosureGroupProps> = ({
    className,
    ...props
}) => {
    return (
        <AriaDisclosureGroup
            className={(renderProps) =>
                clsx(
                    styles["group"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
