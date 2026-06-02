import { type ReactNode, useCallback, useRef, useState } from "react";
import { NavigationStateContext } from "./contex";
import type { NavScrollInfo, SubNavItem } from "./types";

export const NavigationState: React.FC<{ children?: ReactNode }> = ({
    children,
}) => {
    const [openSubNavs, setOpenSubNavs] = useState<SubNavItem[]>([]);
    const navScrollRef = useRef<NavScrollInfo>({});

    const openSubNavigation = useCallback((id: string, depth: number) => {
        setOpenSubNavs((prev) => [
            ...prev.filter((item) => item.depth < depth),
            { id, depth },
        ]);
    }, []);

    const closeSubNavigation = useCallback((id: string) => {
        setOpenSubNavs((prev) => {
            const item = prev.find((x) => x.id === id);

            if (!item) {
                return prev;
            }

            const removedItems = prev.filter((x) => x.depth >= item.depth);

            for (const removedItem of removedItems) {
                delete navScrollRef.current[removedItem.id];
            }

            return prev.filter((x) => x.depth < item.depth);
        });
    }, []);

    const saveNavigationScrollTop = useCallback(
        (id: string, scrollTop: number) => {
            navScrollRef.current[id] = scrollTop;
        },
        []
    );

    const isSubNavigationOpen = useCallback(
        (id: string) => {
            return openSubNavs.some((item) => item.id === id);
        },
        [openSubNavs]
    );

    const getNavigationScrollTop = useCallback((id: string) => {
        return navScrollRef.current[id] ?? 0;
    }, []);

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
                openSubNavigation,
                closeSubNavigation,
                saveNavigationScrollTop,
                isSubNavigationOpen,
                getNavigationScrollTop,
                isInert,
            }}
        >
            {children}
        </NavigationStateContext>
    );
};
