import clsx from "clsx";
import { SheetBackdrop, SheetOverlay } from "react-aria-components";
import styles from "./bottomSwipeSheetOverlay.module.css";
import type { BottomSwipeSheetOverlayProps } from "./types";

export const BottomSwipeSheetOverlay: React.FC<
    BottomSwipeSheetOverlayProps
> = ({ children, className, ...props }) => {
    return (
        <SheetOverlay
            className={(renderProps) =>
                clsx(
                    styles["overlay"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            position="bottom"
            swipeDirection="bottom"
            {...props}
        >
            {(renderProps) => (
                <>
                    <SheetBackdrop className={clsx(styles["backdrop"])} />

                    {typeof children === "function"
                        ? children(renderProps)
                        : children}
                </>
            )}
        </SheetOverlay>
    );
};
