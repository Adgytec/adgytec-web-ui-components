import { clsx } from "clsx";
import { DisclosurePanel as AriaDisclosurePanel } from "react-aria-components";
import type { Typography } from "@/utils";
import { useDisclosureTypographyContext } from "../context";
import styles from "./disclosurePanel.module.css";

/**
 * Props for the {@link DisclosurePanel} component.
 * Extends React Aria's {@link AriaDisclosurePanel} props.
 */
export interface DisclosurePanelProps
    extends React.ComponentPropsWithRef<typeof AriaDisclosurePanel> {
    /**
     * Custom typography style for the disclosure panel content.
     * Overrides the default or group-level typography.
     *
     * @default typography.bodyLarge
     */
    panelTypography?: Typography;
}

/**
 * The collapsible content container displayed when a {@link Disclosure} is expanded.
 *
 * Automatically manages visibility, smooth collapse/expand layout transitions,
 * and inherited or customized typography.
 *
 * @example
 * ```tsx
 * import { Disclosure, DisclosureHeader, DisclosurePanel, typography } from '@adgytec/web-ui-components';
 *
 * <Disclosure>
 *     <DisclosureHeader>FAQ Question</DisclosureHeader>
 *     <DisclosurePanel panelTypography={typography.bodyMedium}>
 *         Answer text explaining details in depth.
 *     </DisclosurePanel>
 * </Disclosure>
 * ```
 */
export const DisclosurePanel: React.FC<DisclosurePanelProps> = ({
    className,
    children,
    panelTypography,
    ...props
}) => {
    const { panel } = useDisclosureTypographyContext({
        panel: panelTypography,
    });

    return (
        <AriaDisclosurePanel
            className={(renderProps) =>
                clsx(
                    styles["panel"],
                    panel,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            <div>{children}</div>
        </AriaDisclosurePanel>
    );
};
