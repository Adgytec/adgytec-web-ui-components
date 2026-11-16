import { clsx } from "clsx";
import {
    DisclosurePanel as AriaDisclosurePanel,
    composeRenderProps,
} from "react-aria-components";
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
    children,
    ...props
}) => {
    return (
        <AriaDisclosurePanel
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["panel"], typography.bodyLarge, className)
            )}
        >
            <div>{children}</div>
        </AriaDisclosurePanel>
    );
};
