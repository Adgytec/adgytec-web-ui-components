import clsx from "clsx";
import { Tabs as AriaTabs } from "react-aria-components";
import styles from "./tabs.module.css";

/**
 * Props for the {@link Tabs} component.
 * Extends React Aria Components `Tabs` props.
 */
export interface TabsProps
    extends React.ComponentPropsWithRef<typeof AriaTabs> {}

/**
 * Main container for organizing content into high-level categories based on
 * [Material 3 Tabs](https://m3.material.io/components/tabs/overview).
 *
 * Extends React Aria Components `Tabs` to manage tab selection state, keyboard navigation,
 * and layout orientation (horizontal or vertical).
 *
 * @example
 * ```tsx
 * import {
 *     Tab,
 *     TabList,
 *     TabPanel,
 *     TabPanels,
 *     Tabs,
 * } from "@adgytec/web-ui-components";
 * import { Home, Settings, User } from "lucide-react";
 *
 * export function Example() {
 *     return (
 *         <Tabs defaultSelectedKey="home">
 *             <TabList aria-label="Navigation">
 *                 <Tab id="home" label="Home" icon={Home} />
 *                 <Tab id="profile" label="Profile" icon={User} />
 *                 <Tab id="settings" label="Settings" icon={Settings} />
 *             </TabList>
 *             <TabPanels>
 *                 <TabPanel id="home">Home content goes here.</TabPanel>
 *                 <TabPanel id="profile">Profile content goes here.</TabPanel>
 *                 <TabPanel id="settings">Settings content goes here.</TabPanel>
 *             </TabPanels>
 *         </Tabs>
 *     );
 * }
 * ```
 */
export const Tabs: React.FC<TabsProps> = ({ className, ...props }) => {
    return (
        <AriaTabs
            className={(renderProps) =>
                clsx(
                    styles["tabs"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
