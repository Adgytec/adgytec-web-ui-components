import { type ReactNode, useMemo, useState } from "react";
import { AppBarStateContext } from "./context";

export const AppBarState: React.FC<{
    children?: ReactNode;
    initialScrolling?: boolean;
}> = ({ children, initialScrolling = false }) => {
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
