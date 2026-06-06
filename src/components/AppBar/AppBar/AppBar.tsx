import clsx from "clsx";
import { useContext, useMemo } from "react";
import { AppBarStateContext } from "../AppBarState";
import {
    AppBarContext,
    AppBarHeadlineBlockSize,
    AppBarHeadlineTypography,
} from "../core";
import styles from "./appBar.module.css";
import type { AppBarProps } from "./types";

export const AppBar: React.FC<AppBarProps> = ({
    className,
    size = "small",
    alignment = "default",
    leadingAction,
    trailingActions,
    headline,
    ...props
}) => {
    const appBarState = useContext(AppBarStateContext);
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
