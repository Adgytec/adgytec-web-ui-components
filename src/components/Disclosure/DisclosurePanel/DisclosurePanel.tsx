import { clsx } from "clsx";
import { DisclosurePanel as AriaDisclosurePanel } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./disclosurePanel.module.css";

/**
 * Props for the {@link DisclosurePanel} component.
 * Extends React Aria's {@link AriaDisclosurePanel} props.
 */
export interface DisclosurePanelProps
    extends React.ComponentPropsWithRef<typeof AriaDisclosurePanel> {}

/**
 * The collapsible content container displayed when a {@link Disclosure} is expanded.
 *
 * Automatically manages visibility, smooth collapse/expand layout transitions via `--disclosure-panel-height`,
 * and default Material Design 3 `bodyLarge` typography.
 *
 * @example
 * ```tsx
 * import {
 *     Disclosure,
 *     DisclosureHeader,
 *     DisclosureLabel,
 *     DisclosurePanel
 * } from '@adgytec/web-ui-components';
 *
 * <Disclosure>
 *     <DisclosureHeader
 *         label={<DisclosureLabel>FAQ Question</DisclosureLabel>}
 *     />
 *     <DisclosurePanel>
 *         Answer text explaining details in depth.
 *     </DisclosurePanel>
 * </Disclosure>
 * ```
 */
export const DisclosurePanel: React.FC<DisclosurePanelProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <AriaDisclosurePanel
            className={(renderProps) =>
                clsx(
                    styles["panel"],
                    typography.bodyLarge,
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
