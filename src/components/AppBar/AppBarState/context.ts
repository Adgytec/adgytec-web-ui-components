import { createContext, useContext } from "react";

/**
 * Context value representing the scrolling state of the application for the {@link AppBar}.
 */
export type AppBarStateContextType = {
    /** Whether the page or container is currently scrolled down. */
    isScrolling: boolean;
    /** Callback to update the scrolling status. */
    updateScrolling: (isScrolling: boolean) => void;
};

/**
 * React context for sharing scroll status with the {@link AppBar} to trigger scrolled styling.
 */
export const AppBarStateContext = createContext<AppBarStateContextType | null>(
    null
);

/**
 * Hook to access the current scrolling state and updater function for the {@link AppBar}.
 *
 * Can be used within scroll containers or event listeners to update the scrolling status
 * of the enclosing `<AppBar>` (toggling elevated/scrolled styling).
 *
 * @returns The active {@link AppBarStateContextType}, or `null` if called outside an `<AppBarState>` provider.
 *
 * @example
 * ```tsx
 * import { useAppBarState } from '@adgytec/web-ui-components';
 * import { useEffect } from 'react';
 *
 * function ScrollListener() {
 *     const appBarState = useAppBarState();
 *
 *     useEffect(() => {
 *         const handleScroll = () => {
 *             appBarState?.updateScrolling(window.scrollY > 0);
 *         };
 *         window.addEventListener('scroll', handleScroll, { passive: true });
 *         return () => window.removeEventListener('scroll', handleScroll);
 *     }, [appBarState]);
 *
 *     return null;
 * }
 * ```
 */
export function useAppBarState() {
    return useContext(AppBarStateContext);
}
