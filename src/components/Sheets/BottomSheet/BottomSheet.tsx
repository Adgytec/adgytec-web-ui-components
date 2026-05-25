import clsx from "clsx";
import { useContext } from "react";
import { Dialog } from "react-aria-components";
import { BottomSheetContext } from "../BottomSheetModal/context";
import styles from "./bottomSheet.module.css";

export const BottomSheet: React.FC<
    React.ComponentPropsWithRef<typeof Dialog>
> = ({ children, className, ...props }) => {
    const { layout } = useContext(BottomSheetContext);

    return (
        <Dialog
            className={clsx(styles["bottom-sheet"], className)}
            data-layout={layout}
            {...props}
        >
            {(renderProps) => (
                <>
                    {typeof children === "function"
                        ? children(renderProps)
                        : children}
                </>
            )}
        </Dialog>
    );
};
