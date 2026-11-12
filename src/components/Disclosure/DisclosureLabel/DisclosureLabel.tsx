import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./disclosureLabel.module.css";

/**
 * Props for the {@link DisclosureLabel} component.
 * Extends React Aria's {@link Text} props.
 */
export interface DisclosureLabelProps
    extends React.ComponentPropsWithRef<typeof Text> {}

/**
 * Primary label text component for a {@link DisclosureHeader}.
 *
 * Renders a semantic text container styled with Material Design 3 `titleMediumEmphasized` typography
 * and dynamic state colors that automatically transition when expanded or disabled.
 *
 * @example
 * ```tsx
 * import { DisclosureLabel } from '@adgytec/web-ui-components';
 *
 * <DisclosureLabel>Personal Information</DisclosureLabel>
 * ```
 */
export const DisclosureLabel: React.FC<DisclosureLabelProps> = ({
    className,
    ...props
}) => {
    return (
        <Text
            className={clsx(
                styles["label"],
                typography.titleMediumEmphasized,
                className
            )}
            {...props}
        />
    );
};
