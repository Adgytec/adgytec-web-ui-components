import { useLayoutEffect } from "react";
import { useObjectRef } from "react-aria";
import { useNavigationInfo } from "../core";
import { useNavigationState } from "../NavigationState";

export const NavigationScrollContainer: React.FC<
    React.ComponentPropsWithRef<"div">
> = ({ ref, ...props }) => {
    const scrollContainerRef = useObjectRef(ref);

    const { saveNavigationScrollTop, getNavigationScrollTop } =
        useNavigationState();
    const { id } = useNavigationInfo();

    useLayoutEffect(() => {
        const scrollTop = getNavigationScrollTop(id);

        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollTop;
        }
    }, [scrollContainerRef, id, getNavigationScrollTop]);

    return (
        <div
            ref={scrollContainerRef}
            onScroll={(e) => {
                saveNavigationScrollTop(id, e.currentTarget.scrollTop);
            }}
            {...props}
        />
    );
};
