import clsx from "clsx";
import { useContext } from "react";
import { Dialog } from "react-aria-components";
import { DialogContext } from "@/components/Dialog";
import { BottomSheetContext } from "../BottomSheetModal";
import styles from "./bottomSheet.module.css";
import type { BottomSheetProps } from "./types";

/**
 * Content container for bottom sheets, conforming to
 * [Material 3 Bottom Sheets](https://m3.material.io/components/bottom-sheets/overview).
 *
 * Renders inside a React Aria `Dialog` within `DialogContext` (value: `true`), anchoring
 * content to the bottom of the viewport with responsive maximum width and height.
 * Consumes {@link BottomSheetContext} to apply `data-layout` for standard or detached layouts.
 *
 * Configurable CSS tokens:
 * - `--md-bottom-sheet-background`: Background color of the bottom sheet (`var(--md-sys-color-surface-container-low)`).
 * - `--md-bottom-sheet-color`: Text color of the bottom sheet (`var(--md-sys-color-on-surface)`).
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
export const BottomSheet: React.FC<BottomSheetProps> = ({
    children,
    className,
    ...props
}) => {
    const { layout } = useContext(BottomSheetContext);

    return (
        <DialogContext value={true}>
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
        </DialogContext>
    );
};
