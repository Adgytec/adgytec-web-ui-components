import { type ReactNode, useCallback, useRef, useState } from "react";
import { NavigationStateContext } from "./context";
import type { NavScrollInfo, SubNavItem } from "./types";

export const NavigationState: React.FC<{ children?: ReactNode }> = ({
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
