import { type ReactNode, useState } from "react";
import { AppBarStateContext } from "./context";

export const AppBarState: React.FC<{
    children?: ReactNode;
    initalScrolling?: boolean;
}> = ({ children, initalScrolling = false }) => {
    const [scrolling, setScrolling] = useState(initalScrolling);

    return (
        <AppBarStateContext
            value={{
                isScrolling: scrolling,
                updateScrolling: setScrolling,
            }}
        >
            {children}
        </AppBarStateContext>
    );
};
