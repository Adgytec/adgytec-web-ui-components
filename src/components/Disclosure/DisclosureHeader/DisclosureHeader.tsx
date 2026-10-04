import { clsx } from "clsx";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";
import { Button, DisclosureStateContext, Heading } from "react-aria-components";
import {
    ButtonReset,
    buttonColorBase,
    buttonColorConfig,
} from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { TapTarget, type Typography } from "@/utils";
import { useDisclosureTypographyContext } from "../context";
import styles from "./disclosureHeader.module.css";

/**
 * Props for the {@link DisclosureHeader} component.
 * Extends React Aria's {@link Heading} props.
 */
export interface DisclosureHeaderProps
    extends React.ComponentPropsWithRef<typeof Heading> {
    /**
     * Custom typography style for the disclosure header label.
     * Overrides the default or group-level typography.
     *
     * @default typography.titleMediumEmphasized
     */
    labelTypography?: Typography;
}

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
    labelTypography,
    ...props
}) => {
    const { splashInfo, handlePress } = useSplash();

    const disclosureContext = useContext(DisclosureStateContext);
    const { isExpanded } = disclosureContext || {};

    const { label } = useDisclosureTypographyContext({
        label: labelTypography,
    });

    return (
        <Heading {...props}>
            <Button
                onPress={handlePress}
                className={clsx(
                    ButtonReset,
                    TapTarget,
                    styles["trigger"],
                    buttonColorBase,
                    buttonColorConfig("standard"),
                    label
                )}
                slot="trigger"
                data-expanded={isExpanded || undefined}
                data-shape="square"
            >
                <span className={styles["state-layer"]}>
                    {splashInfo && <Splash {...splashInfo} />}
                </span>
                <Icon withText icon={ChevronRight} />
                {children}
            </Button>
        </Heading>
    );
};
