import clsx from "clsx";
import type { ReactNode } from "react";
import { typography } from "@/utils";
import styles from "./themeSelector.module.css";

/**
 * Props for the {@link ThemeItem} component.
 */
export interface ThemeItemProps {
    /**
     * Section title heading text.
     */
    heading: string;

    /**
     * Optional explanatory text describing the setting.
     */
    description?: string;

    /**
     * Interactive control element(s) (e.g. connected button groups or switches) associated with the item.
     */
    children?: ReactNode;

    /**
     * Optional custom CSS class name applied to the container.
     */
    className?: string;

    /**
     * Whether to render inline `span` elements instead of block `div` elements.
     * Useful when nesting inside a label or interactive component like `Switch`.
     *
     * @default false
     */
    useInline?: boolean;

    /**
     * Whether the setting item is disabled (visually dimmed and non-interactive).
     *
     * @default false
     */
    isDisabled?: boolean;
}

/**
 * Layout helper component for a single setting item within {@link ThemeSelector}.
 *
 * Renders a styled heading (`typography.titleMedium`), an optional description (`typography.bodyMedium`),
 * and the child controls. Supports both block rendering and inline `span` rendering, as well as disabled styling.
 *
 * @example
 * ```tsx
 * import { ThemeItem } from "@adgytec/web-ui-components";
 *
 * export function SettingRow() {
 *     return (
 *         <ThemeItem
 *             heading="Appearance"
 *             description="Select your preferred color mode."
 *         >
 *             <Controls />
 *         </ThemeItem>
 *     );
 * }
 * ```
 */
export const ThemeItem: React.FC<ThemeItemProps> = ({
    heading,
    description,
    children,
    className,
    useInline = false,
    isDisabled = false,
}) => {
    if (useInline) {
        return (
            <span
                className={clsx(
                    styles["theme-item"],
                    isDisabled && styles["disabled"],
                    className
                )}
                data-disabled={isDisabled || undefined}
            >
                <span className={clsx(styles["theme-item-info"])}>
                    <span
                        className={clsx(
                            typography.titleMedium,
                            styles["theme-item-heading"]
                        )}
                        slot="label"
                    >
                        {heading}
                    </span>

                    {description && (
                        <span
                            className={clsx(
                                typography.bodyMedium,
                                styles["theme-item-description"]
                            )}
                            slot="description"
                        >
                            {description}
                        </span>
                    )}
                </span>

                {children}
            </span>
        );
    }

    return (
        <div
            className={clsx(
                styles["theme-item"],
                isDisabled && styles["disabled"],
                className
            )}
            data-disabled={isDisabled || undefined}
        >
            <div className={clsx(styles["theme-item-info"])}>
                <h3
                    className={clsx(
                        typography.titleMedium,
                        styles["theme-item-heading"]
                    )}
                >
                    {heading}
                </h3>

                {description && (
                    <p
                        className={clsx(
                            typography.bodyMedium,
                            styles["theme-item-description"]
                        )}
                    >
                        {description}
                    </p>
                )}
            </div>

            {children}
        </div>
    );
};
