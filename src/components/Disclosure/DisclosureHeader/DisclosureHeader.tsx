import { clsx } from "clsx";
import { useContext } from "react";
import { Button, DisclosureStateContext, Heading } from "react-aria-components";
import styles from "./disclosureHeader.module.css";

/**
 * Props for the {@link DisclosureHeader} component.
 * Extends React Aria's {@link Heading} props.
 */
export interface DisclosureHeaderProps
    extends React.ComponentPropsWithRef<typeof Heading> {}

/**
 * The interactive header that toggles expansion of a {@link Disclosure} component.
 *
 * Renders a semantic heading enclosing an accessible button trigger equipped with an expanding
 * chevron indicator icon and Material Design touch ripple feedback.
 *
 * @example
 * ```tsx
 * import { Disclosure, DisclosureHeader, DisclosurePanel, typography } from '@adgytec/web-ui-components';
 *
 * <Disclosure>
 *     <DisclosureHeader labelTypography={typography.titleLarge}>
 *         Section Title
 *     </DisclosureHeader>
 *     <DisclosurePanel>Section Content</DisclosurePanel>
 * </Disclosure>
 * ```
 */
export const DisclosureHeader: React.FC<DisclosureHeaderProps> = ({
    children,
    ...props
}) => {
    const disclosureContext = useContext(DisclosureStateContext);
    const { isExpanded } = disclosureContext || {};

    return (
        <Heading {...props}>
            <Button
                className={clsx(styles["trigger"])}
                slot="trigger"
                data-expanded={isExpanded || undefined}
            >
                {children}
            </Button>
        </Heading>
    );
};
