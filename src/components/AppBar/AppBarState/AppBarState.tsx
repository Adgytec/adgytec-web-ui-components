import { type ReactNode, useMemo, useState } from "react";
import { AppBarStateContext } from "./context";

/**
 * Props for the {@link AppBarState} provider component.
 */
export interface AppBarStateProps {
    /** The child components within the state context. */
    children?: ReactNode;
    /** Initial scrolling state. Defaults to `false`. */
    initialScrolling?: boolean;
}

/**
 * Context provider that manages and shares the scrolling state of the {@link AppBar}.
 *
 * When `isScrolling` is true, the `AppBar` container adopts its elevated / scrolled visual style
 * (using `--md-app-bar-on-scroll-background`).
 *
 * @example
 * ```tsx
 * import { AppBarState, AppBar, AppBarHeadline } from '@adgytec/web-ui-components';
 *
 * function App() {
 *     return (
 *         <AppBarState>
 *             <AppBar headline={<AppBarHeadline>Title</AppBarHeadline>} />
 *             <main>...</main>
 *         </AppBarState>
 *     );
 * }
 * ```
 */
export const AppBarState: React.FC<AppBarStateProps> = ({
    children,
    initialScrolling = false,
}) => {
    const [scrolling, setScrolling] = useState(initialScrolling);
    const contextValue = useMemo(
        () => ({
            isScrolling: scrolling,
            updateScrolling: setScrolling,
        }),
        [scrolling]
    );

    return (
        <AppBarStateContext value={contextValue}>{children}</AppBarStateContext>
    );
};
