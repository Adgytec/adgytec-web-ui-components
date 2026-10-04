import clsx from "clsx";
import { Heading } from "react-aria-components";
import { useAppBarContext } from "../core";
import styles from "./appBarHeadline.module.css";

/**
 * Props for the {@link AppBarHeadline} component.
 */
export type AppBarHeadlineProps = React.ComponentPropsWithRef<typeof Heading>;

/**
 * Semantic heading component for the {@link AppBar}.
 *
 * Automatically coordinates with the enclosing `<AppBar>` context to adapt its
 * typography scale (Title Large, Headline Medium, or Display Small) and text alignment
 * (`"default"` or `"centered"`).
 *
 * @example
 * ```tsx
 * import { AppBarHeadline } from '@adgytec/web-ui-components';
 *
 * <AppBarHeadline>Page Title</AppBarHeadline>
 * ```
 */
export const AppBarHeadline: React.FC<AppBarHeadlineProps> = ({
    className,
    ...props
}) => {
    const appBarContext = useAppBarContext();

    return (
        <Heading
            className={clsx(
                appBarContext.headlineTypography,
                styles["headline"],
                styles[appBarContext.alignment],
                className
            )}
            {...props}
            data-app-bar-headline
        />
    );
};
