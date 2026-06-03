import clsx from "clsx";
import { useLayoutEffect } from "react";
import { useObjectRef } from "react-aria";
import { calculateScrollTop } from "@/utils";
import { useNavigationInfo } from "../core";
import { useNavigationState } from "../NavigationState";
import styles from "./navigationScrollContainer.module.css";

export const NavigationScrollContainer: React.FC<
    React.ComponentPropsWithRef<"div">
> = ({ ref, className, ...props }) => {
    const scrollContainerRef = useObjectRef(ref);

    const { registerNavigationContainer, saveNavigationScrollTop } =
        useNavigationState();
    const { id } = useNavigationInfo();

    useLayoutEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) {
            return;
        }

        return registerNavigationContainer(id, container);
    }, [scrollContainerRef, id, registerNavigationContainer]);

    return (
        <div
            ref={scrollContainerRef}
            onScroll={(e) => {
                saveNavigationScrollTop(
                    id,
                    calculateScrollTop({
                        scrollHeight: e.currentTarget.scrollHeight,
                        clientHeight: e.currentTarget.clientHeight,
                        scrollTop: e.currentTarget.scrollTop,
                    }).progress
                );
            }}
            className={clsx(styles["container"], className)}
            {...props}
        />
    );
};
