import clsx from "clsx";
import styles from "./navigationSection.module.css";

/**
 * Props for the [`NavigationSection`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationSection/NavigationSection/NavigationSection.tsx) component.
 */
export interface NavigationSectionProps
    extends React.ComponentPropsWithRef<"section"> {}

/**
 * Semantic container used to group related navigation items and an optional section heading.
 *
 * @example
 * ```tsx
 * import {
 *     NavigationSection,
 *     NavigationSectionLabel,
 *     NavigationLink,
 * } from "@adgytec/web-ui-components";
 * import { Settings } from "lucide-react";
 *
 * <NavigationSection>
 *     <NavigationSectionLabel>Preferences</NavigationSectionLabel>
 *     <NavigationLink href="/settings" label="Settings" icon={Settings} />
 * </NavigationSection>
 * ```
 */
export const NavigationSection: React.FC<NavigationSectionProps> = ({
    className,
    ...props
}) => {
    return (
        <section className={clsx(styles["section"], className)} {...props} />
    );
};
