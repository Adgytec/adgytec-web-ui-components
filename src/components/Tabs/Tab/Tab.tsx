import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Tab as AriaTab, SelectionIndicator } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { typography } from "@/utils";
import styles from "./tab.module.css";

/**
 * Props for the {@link Tab} component.
 * Extends React Aria Components `Tab` props (omitting raw `children` in favor of `label` and `icon`).
 */
export interface TabProps
    extends Omit<React.ComponentPropsWithRef<typeof AriaTab>, "children"> {
    /**
     * Text label to display inside the tab.
     */
    label?: ReactNode;

    /**
     * Optional icon displayed alongside the tab label.
     */
    icon?: LucideIcon;
}

/**
 * An individual interactive tab button within a {@link TabList}, conforming to
 * [Material 3 Tabs](https://m3.material.io/components/tabs/overview).
 *
 * Extends React Aria Components `Tab` with Material 3 styling, supporting:
 * - A text `label` and an optional `icon` (rendered via {@link Icon}).
 * - Interactive ripple feedback via {@link Splash}.
 * - An animated {@link SelectionIndicator} that underlines or highlights the active tab.
 * - State layer feedback on hover, focus-visible, and pressed states.
 *
 * @example
 * ```tsx
 * import { Tab } from "@adgytec/web-ui-components";
 * import { Home } from "lucide-react";
 *
 * export function Example() {
 *     return <Tab id="home" label="Home" icon={Home} />;
 * }
 * ```
 */
export const Tab: React.FC<TabProps> = ({
    className,
    label,
    icon,
    onPress,
    ...props
}) => {
    const { splashInfo, handlePress } = useSplash(onPress);

    return (
        <AriaTab
            onPress={handlePress}
            className={(renderProps) =>
                clsx(
                    styles["tab"],
                    typography.titleSmall,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-icon={icon ? true : undefined}
            data-tab={true}
        >
            {splashInfo && (
                <span className={clsx(styles["splash"])}>
                    <Splash {...splashInfo} />
                </span>
            )}
            {icon && <Icon icon={icon} size={24} />}
            {label}
            <SelectionIndicator
                className={clsx(styles["selection-indicator"])}
                data-selection-indicator={true}
            />
        </AriaTab>
    );
};
