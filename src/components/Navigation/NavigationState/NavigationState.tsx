import { type ReactNode, useCallback, useRef, useState } from "react";
import { NavigationStateContext } from "./context";
import type { NavScrollInfo, SubNavItem } from "./types";

/**
 * Props for the [`NavigationState`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationState/NavigationState.tsx) component.
 */
export interface NavigationStateProps {
    /**
     * Child elements, typically one or more [`Navigation`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/Navigation/Navigation.tsx) instances.
     */
    children?: ReactNode;
}

/**
 * Global navigation state coordinator component.
 *
 * Coordinates active sub-navigation panel stacks, tracks inert states for covered panels,
 * and maintains scroll position synchronization across multiple navigation instances
 * (such as a persistent desktop sidebar and a mobile drawer).
 *
 * @example
 * ```tsx
 * import { NavigationState, Navigation } from "@adgytec/web-ui-components";
 *
 * <NavigationState>
 *     <Navigation label="Main Navigation">
 *         {...}
 *     </Navigation>
 * </NavigationState>
 * ```
 */
export const NavigationState: React.FC<NavigationStateProps> = ({
    children,
}) => {
    const [openSubNavs, setOpenSubNavs] = useState<SubNavItem[]>([]);
    const navScrollRef = useRef<NavScrollInfo>({});

    const getNavigationScrollProgress = useCallback((id: string) => {
        return navScrollRef.current[id] ?? 0;
    }, []);

    const openSubNavigation = useCallback((id: string, depth: number) => {
        setOpenSubNavs((prev) => [
            ...prev.filter((item) => item.depth < depth),
            { id, depth },
        ]);
    }, []);

    const closeSubNavigation = useCallback(
        (id: string) => {
            const item = openSubNavs.find((x) => x.id === id);
            if (!item) {
                return;
            }

            const removedItems = openSubNavs.filter(
                (x) => x.depth >= item.depth
            );
            for (const removedItem of removedItems) {
                delete navScrollRef.current[removedItem.id];
            }

            setOpenSubNavs((prev) => prev.filter((x) => x.depth < item.depth));
        },
        [openSubNavs]
    );

    const saveNavigationScrollTopProgress = useCallback(
        (id: string, progress: number) => {
            navScrollRef.current[id] = progress;
        },
        []
    );

    const isSubNavigationOpen = useCallback(
        (id: string) => {
            return openSubNavs.some((item) => item.id === id);
        },
        [openSubNavs]
    );

    const isInert = useCallback(
        (depth: number) => {
            const activeDepth = openSubNavs[openSubNavs.length - 1]?.depth ?? 0;

            return depth < activeDepth;
        },
        [openSubNavs]
    );

    return (
        <NavigationStateContext
            value={{
                getNavigationScrollProgress,
                openSubNavigation,
                closeSubNavigation,
                saveNavigationScrollTopProgress,
                isSubNavigationOpen,
                isInert,
            }}
        >
            {children}
        </NavigationStateContext>
    );
};
