import clsx from "clsx";
import {
    AppBarContext,
    AppBarHeadlineBlockSize,
    AppBarHeadlingTypography,
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
    const hasSecondary = size !== "small";
    const hasTrailingActions = trailingActions && trailingActions.length > 0;

    return (
        <AppBarContext
            value={{
                size,
                alignment,
                getHeadlineBlockSize: () => {
                    return AppBarHeadlineBlockSize[size];
                },
                getHeadlineTypography: () => {
                    return AppBarHeadlingTypography[size];
                },
            }}
        >
            <header
                className={clsx(styles["app-bar"], className)}
                {...props}
                data-size={size}
                data-alignment={alignment}
                data-has-secondary={hasSecondary || undefined}
            >
                <div data-primary className={clsx(styles["primary"])}>
                    {leadingAction && (
                        <div
                            data-primary-leading
                            className={clsx(styles["leading-action"])}
                        >
                            {leadingAction}
                        </div>
                    )}

                    {!hasSecondary && (
                        <div
                            data-alignment={alignment}
                            data-size={size}
                            className={clsx(styles["headline"])}
                        >
                            {headline}
                        </div>
                    )}

                    {hasTrailingActions && (
                        <div
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
