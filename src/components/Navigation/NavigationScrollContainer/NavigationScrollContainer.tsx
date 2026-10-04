import clsx from "clsx";
import { useLayoutEffect } from "react";
import { useObjectRef } from "react-aria";
import { getScrollProgress, getScrollTopFromProgress } from "@/utils";
import { useNavigationInfo } from "../core";
import { useNavigationState } from "../NavigationState";
import styles from "./navigationScrollContainer.module.css";

/**
 * Props for the [`NavigationScrollContainer`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationScrollContainer/NavigationScrollContainer.tsx) component.
 */
export interface NavigationScrollContainerProps
    extends React.ComponentPropsWithRef<"div"> {}

/**
 * Scrollable viewport container for navigation items and sections.
 *
 * Automatically records and restores scroll progress on mount and scroll events,
 * coordinating with [`NavigationState`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Navigation/NavigationState/NavigationState.tsx)
 * to keep scroll positions synchronized when navigating into and out of sub-menus.
 *
 * @example
 * ```tsx
 * <NavigationScrollContainer>
 *     <NavigationSection>
 *         <NavigationLink href="/" label="Home" />
 *     </NavigationSection>
 * </NavigationScrollContainer>
 * ```
 */
export const NavigationScrollContainer: React.FC<
    NavigationScrollContainerProps
> = ({ ref, className, ...props }) => {
    const scrollContainerRef = useObjectRef(ref);

    const { saveNavigationScrollTopProgress, getNavigationScrollProgress } =
        useNavigationState();
    const { id } = useNavigationInfo();

    useLayoutEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) {
            return;
        }

        container.scrollTop = getScrollTopFromProgress({
            scrollHeight: container.scrollHeight,
            clientHeight: container.clientHeight,
            progress: getNavigationScrollProgress(id),
        });
    }, [scrollContainerRef, id, getNavigationScrollProgress]);

    return (
        <div
            ref={scrollContainerRef}
            onScroll={(e) => {
                saveNavigationScrollTopProgress(
                    id,
                    getScrollProgress({
                        scrollHeight: e.currentTarget.scrollHeight,
                        clientHeight: e.currentTarget.clientHeight,
                        scrollTop: e.currentTarget.scrollTop,
                    })
                );
            }}
            className={clsx(styles["container"], className)}
            {...props}
        />
    );
};
