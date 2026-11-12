import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import { Button, DisclosureStateContext, Heading } from "react-aria-components";
import { Splash, useSplash } from "@/components/Splash";
import { DisclosureIcon } from "..";
import styles from "./disclosureHeader.module.css";
import type { DisclosureHeaderProps } from "./types";

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
    label,
    leading,
}) => {
    const { splashInfo, handlePress } = useSplash();

    const disclosureContext = useContext(DisclosureStateContext);
    const { isExpanded } = disclosureContext || {};

    return (
        <Heading>
            <Button
                onPress={handlePress}
                className={clsx(styles["reset"], styles["button"])}
                slot="trigger"
                data-expanded={isExpanded || undefined}
            >
                {splashInfo && <Splash {...splashInfo} />}

                {leading && (
                    <div className={clsx(styles["leading"])}>{leading}</div>
                )}

                <div className={clsx(styles["label"])}>{label}</div>

                <div
                    className={clsx(styles["trailing"])}
                    data-expanded={isExpanded || undefined}
                >
                    <DisclosureIcon icon={ChevronDown} />
                </div>
            </Button>
        </Heading>
    );
};
