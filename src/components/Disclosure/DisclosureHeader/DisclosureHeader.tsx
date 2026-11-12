import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import { Button, DisclosureStateContext, Heading } from "react-aria-components";
import { ListIcon } from "@/components/List";
import { Splash, useSplash } from "@/components/Splash";
import styles from "./disclosureHeader.module.css";
import type { DisclosureHeaderProps } from "./types";

/**
 * The interactive header that toggles expansion of a {@link Disclosure} component.
 *
 * Renders a semantic heading enclosing an accessible button trigger equipped with touch ripple
 * feedback (`Splash`), support for optional leading content (`leading`), header label content (`label`),
 * and an automatically rotating chevron indicator icon at the trailing edge.
 *
 * @example
 * ```tsx
 * import {
 *     Disclosure,
 *     DisclosureHeader,
 *     DisclosureLabel,
 *     DisclosurePanel,
 *     DisclosureIcon
 * } from '@adgytec/web-ui-components';
 * import { Shield } from 'lucide-react';
 *
 * <Disclosure>
 *     <DisclosureHeader
 *         leading={<DisclosureIcon icon={Shield} />}
 *         label={<DisclosureLabel>Section Title</DisclosureLabel>}
 *     />
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
                    <ListIcon icon={ChevronDown} />
                </div>
            </Button>
        </Heading>
    );
};
