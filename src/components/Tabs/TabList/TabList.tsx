import clsx from "clsx";
import { TabList as AriaTabList } from "react-aria-components";
import styles from "./tabList.module.css";

/**
 * Props for the {@link TabList} component.
 * Extends React Aria Components `TabList` props.
 *
 * Configurable CSS tokens:
 * - `--md-tabs-color`: Text and icon color for inactive tabs (`var(--md-sys-color-on-surface-variant)`).
 * - `--md-tabs-active-color`: Text and icon color for the active tab (`var(--md-sys-color-on-surface)`).
 * - `--md-tabs-active-indicator-color`: Color of the selection indicator line (`var(--md-sys-color-primary)`).
 * - `--md-tab-list-divider-color`: Color of the divider line below or beside the tab list (`var(--md-sys-color-surface-variant)`).
 */
export interface TabListProps<T extends object = object>
    extends React.ComponentPropsWithRef<typeof AriaTabList<T>> {}

/**
 * Container for interactive {@link Tab} elements, conforming to
 * [Material 3 Tabs](https://m3.material.io/components/tabs/overview).
 *
 * Extends React Aria Components `TabList` with Material 3 styling, active selection
 * indicator positioning, and divider styling for horizontal and vertical orientations.
 *
 * Configurable CSS tokens:
 * - `--md-tabs-color`: Text and icon color for inactive tabs (`var(--md-sys-color-on-surface-variant)`).
 * - `--md-tabs-active-color`: Text and icon color for the active tab (`var(--md-sys-color-on-surface)`).
 * - `--md-tabs-active-indicator-color`: Color of the selection indicator line (`var(--md-sys-color-primary)`).
 * - `--md-tab-list-divider-color`: Color of the divider line below or beside the tab list (`var(--md-sys-color-surface-variant)`).
 *
 * @example
 * ```tsx
 * import { Tab, TabList } from "@adgytec/web-ui-components";
 * import { Home, Settings, User } from "lucide-react";
 *
 * export function NavigationTabList() {
 *     return (
 *         <TabList aria-label="Account Tabs">
 *             <Tab id="home" label="Home" icon={Home} />
 *             <Tab id="profile" label="Profile" icon={User} />
 *             <Tab id="settings" label="Settings" icon={Settings} />
 *         </TabList>
 *     );
 * }
 * ```
 */
export const TabList = <T extends object>({
    className,
    ...props
}: TabListProps<T>) => {
    return (
        <AriaTabList
            className={(renderProps) =>
                clsx(
                    styles["tab-list"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
