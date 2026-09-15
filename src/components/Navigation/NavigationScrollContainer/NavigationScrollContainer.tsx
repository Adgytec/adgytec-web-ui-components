import clsx from "clsx";
import { useLayoutEffect } from "react";
import { useObjectRef } from "react-aria";
import { getScrollProgress, getScrollTopFromProgress } from "@/utils";
import { useNavigationInfo } from "../core";
import { useNavigationState } from "../NavigationState";
import styles from "./navigationScrollContainer.module.css";

export const NavigationScrollContainer: React.FC<
    React.ComponentPropsWithRef<"div">
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
