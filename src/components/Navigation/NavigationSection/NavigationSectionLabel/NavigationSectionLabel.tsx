import clsx from "clsx";
import { Heading } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./navigationSectionLabel.module.css";

/**
 * Props for the [`NavigationSectionLabel`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationSection/NavigationSectionLabel/NavigationSectionLabel.tsx) component.
 */
export interface NavigationSectionLabelProps
    extends React.ComponentPropsWithRef<typeof Heading> {}

/**
 * Styled title heading for a [`NavigationSection`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationSection/NavigationSection/NavigationSection.tsx).
 *
 * Rendered with Material Design 3 `titleSmall` typography and accessible heading semantics.
 *
 * @example
 * ```tsx
 * <NavigationSectionLabel>Workspaces</NavigationSectionLabel>
 * ```
 */
export const NavigationSectionLabel: React.FC<NavigationSectionLabelProps> = ({
    className,
    ...props
}) => {
    return (
        <Heading
            className={clsx(styles["label"], typography.titleSmall, className)}
            {...props}
        />
    );
};
