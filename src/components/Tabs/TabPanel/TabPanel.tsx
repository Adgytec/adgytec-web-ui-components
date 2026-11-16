import clsx from "clsx";
import {
    TabPanel as AriaTabPanel,
    composeRenderProps,
} from "react-aria-components";
import styles from "./tabPanel.module.css";

/**
 * Props for the {@link TabPanel} component.
 * Extends React Aria Components `TabPanel` props.
 */
export interface TabPanelProps
    extends React.ComponentPropsWithRef<typeof AriaTabPanel> {}

/**
 * Content panel associated with a specific {@link Tab}, conforming to
 * [Material 3 Tabs](https://m3.material.io/components/tabs/overview).
 *
 * Extends React Aria Components `TabPanel` with Material 3 styling and smooth
 * fade entrance animations when the tab becomes active.
 *
 * @example
 * ```tsx
 * import { TabPanel } from "@adgytec/web-ui-components";
 *
 * export function PanelExample() {
 *     return (
 *         <TabPanel id="profile">
 *             <h3>User Profile</h3>
 *             <p>Manage user profile information here.</p>
 *         </TabPanel>
 *     );
 * }
 * ```
 */
export const TabPanel: React.FC<TabPanelProps> = ({ ...props }) => {
    return (
        <AriaTabPanel
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["tab-panel"], className)
            )}
        />
    );
};
