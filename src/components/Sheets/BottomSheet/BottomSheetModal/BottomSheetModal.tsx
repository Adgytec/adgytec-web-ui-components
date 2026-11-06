import clsx from "clsx";
import { Modal } from "react-aria-components";
import styles from "./bottomSheetModal.module.css";
import { BottomSheetContext } from "./context";
import type { BottomSheetModalProps } from "./types";

/**
 * Modal container for a bottom sheet ({@link BottomSheet}).
 *
 * Implements [Material 3 Bottom Sheets](https://m3.material.io/components/bottom-sheets/overview)
 * positioning and animations using React Aria Components `Modal`. Sets `data-layout` attribute
 * to control slide-up entrance/exit animations and viewport margin styling, and provides layout
 * configuration to children through {@link BottomSheetContext}.
 *
 * @example
 * ```tsx
 * import { DialogTrigger } from "react-aria-components";
 * import {
 *     BottomSheet,
 *     BottomSheetModal,
 *     Button,
 *     ModalOverlay,
 * } from "@adgytec/web-ui-components";
 *
 * export function Example() {
 *     return (
 *         <DialogTrigger>
 *             <Button label="Open Bottom Sheet" />
 *             <ModalOverlay>
 *                 <BottomSheetModal layout="standard">
 *                     <BottomSheet>
 *                         <p>This is the bottom sheet content.</p>
 *                     </BottomSheet>
 *                 </BottomSheetModal>
 *             </ModalOverlay>
 *         </DialogTrigger>
 *     );
 * }
 * ```
 */
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
