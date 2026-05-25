import clsx from "clsx";
import { Modal } from "react-aria-components";
import { SlideSheetContext } from "./context";
import styles from "./sideSheetModal.module.css";
import type { SideSheetModalProps } from "./types";

export const SideSheetModal: React.FC<SideSheetModalProps> = ({
    className,
    alignment = "end",
    layout = "standard",
    ...props
}) => {
    return (
        <SlideSheetContext value={{ alignment, layout }}>
            <Modal
                data-alignment={alignment}
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
        </SlideSheetContext>
    );
};
