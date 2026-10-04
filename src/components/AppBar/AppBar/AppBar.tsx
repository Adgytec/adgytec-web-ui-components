import clsx from "clsx";
import { useMemo } from "react";
import { useAppBarState } from "../AppBarState";
import {
    AppBarContext,
    AppBarHeadlineBlockSize,
    AppBarHeadlineTypography,
} from "../core";
import styles from "./appBar.module.css";
import type { AppBarProps } from "./types";

/**
 * Material 3 Top App Bar container component.
 *
 * Coordinates screen-level branding, titles, and actions. Supports single-row
 * `"small"` layouts as well as expressive two-row `"medium"` and `"large"` layouts
 * with automatic typography scaling and responsive title placement.
 *
 * Connects with {@link AppBarStateContext} (via {@link useAppBarState}) to adapt background color and elevation when scrolled.
 *
 * @example
 * ```tsx
 * import { AppBar, AppBarAction, AppBarHeadline } from '@adgytec/web-ui-components';
 * import { Menu, Search, MoreVertical } from 'lucide-react';
 *
 * function Header() {
 *     return (
 *         <AppBar
 *             size="small"
 *             leadingAction={<AppBarAction icon={Menu} aria-label="Open navigation menu" />}
 *             headline={<AppBarHeadline>Dashboard</AppBarHeadline>}
 *             trailingActions={[
 *                 <AppBarAction key="search" icon={Search} aria-label="Search" />,
 *                 <AppBarAction key="more" icon={MoreVertical} aria-label="More options" />
 *             ]}
 *         />
 *     );
 * }
 * ```
 */
export const AppBar: React.FC<AppBarProps> = ({
    className,
    size = "small",
    alignment = "default",
    leadingAction,
    trailingActions,
    headline,
    ...props
}) => {
    const appBarState = useAppBarState();
    const hasSecondary = size !== "small";
    const hasTrailingActions = trailingActions && trailingActions.length > 0;

    const contextValue = useMemo(
        () => ({
            size,
            alignment,
            headlineBlockSize: AppBarHeadlineBlockSize[size],
            headlineTypography: AppBarHeadlineTypography[size],
        }),
        [size, alignment]
    );

    return (
        <AppBarContext value={contextValue}>
            <header
                className={clsx(styles["app-bar"], className)}
                {...props}
                data-size={size}
                data-alignment={alignment}
                data-has-secondary={(hasSecondary && !!headline) || undefined}
                data-scroll={appBarState?.isScrolling || undefined}
            >
                <div
                    data-primary
                    className={clsx(styles["primary"])}
                    data-alignment={alignment}
                    data-size={size}
                >
                    {leadingAction && (
                        <div
                            data-alignment={alignment}
                            data-primary-leading
                            className={clsx(styles["leading-action"])}
                        >
                            {leadingAction}
                        </div>
                    )}

                    {!hasSecondary && headline && (
                        <div
                            data-alignment={alignment}
                            className={clsx(styles["headline"])}
                            data-initial-padding={!leadingAction || undefined}
                        >
                            {headline}
                        </div>
                    )}

                    {hasTrailingActions && (
                        <div
                            data-alignment={alignment}
                            data-primary-trailing
                            className={clsx(styles["trailing-actions"])}
                        >
                            {trailingActions}
                        </div>
                    )}
                </div>

                {hasSecondary && headline && (
                    <div
                        data-secondary
                        data-alignment={alignment}
                        className={clsx(styles["secondary"])}
                    >
                        {headline}
                    </div>
                )}
            </header>
        </AppBarContext>
    );
};
