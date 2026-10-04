import clsx from "clsx";
import { Modal } from "react-aria-components";
import { SideSheetContext } from "./context";
import styles from "./sideSheetModal.module.css";
import type { SideSheetModalProps } from "./types";

/**
 * Modal container for a side sheet ({@link SideSheet} or {@link SideSheetDialog}).
 *
 * Implements [Material 3 Side Sheets](https://m3.material.io/components/side-sheets/overview)
 * positioning and animations using React Aria Components `Modal`. Sets `data-alignment` and
 * `data-layout` attributes to control entry/exit slide animations and viewport anchoring,
 * and provides layout and alignment configurations to children through {@link SideSheetContext}.
 *
 * @example
 * ```tsx
 * import { DialogTrigger } from "react-aria-components";
 * import {
 *     Button,
 *     ModalOverlay,
 *     SideSheet,
 *     SideSheetModal,
 * } from "@adgytec/web-ui-components";
 *
 * export function Example() {
 *     return (
 *         <DialogTrigger>
 *             <Button label="Open Details" />
 *             <ModalOverlay>
 *                 <SideSheetModal alignment="end" layout="standard">
 *                     <SideSheet headline="Details">
 *                         <p>Side sheet content goes here.</p>
 *                     </SideSheet>
 *                 </SideSheetModal>
 *             </ModalOverlay>
 *         </DialogTrigger>
 *     );
 * }
 * ```
 */
export const SideSheetModal: React.FC<SideSheetModalProps> = ({
    className,
    alignment = "end",
    layout = "standard",
    ...props
}) => {
    return (
        <SideSheetContext value={{ alignment, layout }}>
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
        </SideSheetContext>
    );
};
