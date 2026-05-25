import clsx from "clsx";
import { Modal } from "react-aria-components";
import styles from "./bottomSheetModal.module.css";
import { BottomSheetContext } from "./context";
import type { BottomSheetModalProps } from "./types";

export const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
    className,
    layout = "standard",
    ...props
}) => {
    return (
        <BottomSheetContext value={{ layout }}>
            <Modal
                data-layout={layout}
                className={(renderProps) =>
                    clsx(
                        styles["modal"],
                        typeof className === "function"
                            ? className(renderProps)
                            : className
                    )
                }
                {...props}
            />
        </BottomSheetContext>
    );
};
