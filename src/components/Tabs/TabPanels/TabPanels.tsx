import clsx from "clsx";
import { TabPanels as AriaTabPanels } from "react-aria-components";
import styles from "./tabPanels.module.css";

/**
 * Props for the {@link TabPanels} component.
 * Extends React Aria Components `TabPanels` props.
 */
export interface TabPanelsProps<T extends object = object>
    extends React.ComponentPropsWithRef<typeof AriaTabPanels<T>> {}

/**
 * Container for {@link TabPanel} elements in a {@link Tabs} structure, conforming to
 * [Material 3 Tabs](https://m3.material.io/components/tabs/overview).
 *
 * Extends React Aria Components `TabPanels` and provides coordinated smooth height transitions
 * when switching between tab panels.
 *
 * @example
 * ```tsx
 * import { TabPanel, TabPanels } from "@adgytec/web-ui-components";
 *
 * export function PanelsExample() {
 *     return (
 *         <TabPanels>
 *             <TabPanel id="account">Account settings content</TabPanel>
 *             <TabPanel id="security">Security settings content</TabPanel>
 *         </TabPanels>
 *     );
 * }
 * ```
 */
export const TabPanels = <T extends object>({
    className,
    ...props
}: TabPanelsProps<T>) => {
    return (
        <AriaTabPanels
            className={clsx(styles["tab-panels"], className)}
            {...props}
            data-tab-panels={true}
        />
    );
};
