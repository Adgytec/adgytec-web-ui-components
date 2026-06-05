import { type ReactNode, useCallback, useRef, useState } from "react";
import { getScrollTopFromProgress } from "@/utils";
import { NavigationStateContext } from "./context";
import type { NavScrollInfo, SubNavItem } from "./types";

export const NavigationState: React.FC<{ children?: ReactNode }> = ({
    children,
}) => {
    const [openSubNavs, setOpenSubNavs] = useState<SubNavItem[]>([]);
    const navScrollRef = useRef<NavScrollInfo>({});
    const navContainersRef = useRef<Record<string, Set<HTMLDivElement>>>({});

    const registerNavigationContainer = useCallback(
        (id: string, container: HTMLDivElement) => {
            const progress = navScrollRef.current[id] ?? 0;

            container.scrollTop = getScrollTopFromProgress({
                scrollHeight: container.scrollHeight,
                clientHeight: container.clientHeight,
                progress,
            });

            navContainersRef.current[id] ??= new Set();
            navContainersRef.current[id].add(container);

            return () => {
                navContainersRef.current[id]?.delete(container);

                if (navContainersRef.current[id]?.size === 0) {
                    delete navContainersRef.current[id];
                }
            };
        },
        []
    );

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

            const containers = navContainersRef.current[id];

            if (!containers) {
                return;
            }

            for (const container of containers) {
                const targetScrollTop = getScrollTopFromProgress({
                    scrollHeight: container.scrollHeight,
                    clientHeight: container.clientHeight,
                    progress,
                });

                if (Math.abs(container.scrollTop - targetScrollTop) > 1) {
                    container.scrollTop = targetScrollTop;
                }
            }
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
                openSubNavigation,
                closeSubNavigation,
                saveNavigationScrollTopProgress,
                registerNavigationContainer,
                isSubNavigationOpen,
                isInert,
            }}
        >
            {children}
        </NavigationStateContext>
    );
};
