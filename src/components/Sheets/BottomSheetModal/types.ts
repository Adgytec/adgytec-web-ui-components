import type { Modal } from "react-aria-components";
import type { SheetLayout } from "../core";

/**
 * Props for the {@link BottomSheetModal} component.
 * Extends React Aria Components `Modal` props with bottom-sheet layout configurations.
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
 *             <Button label="Open Sheet" />
 *             <ModalOverlay>
 *                 <BottomSheetModal layout="standard">
 *                     <BottomSheet>
 *                         <p>Bottom sheet content.</p>
 *                     </BottomSheet>
 *                 </BottomSheetModal>
 *             </ModalOverlay>
 *         </DialogTrigger>
 *     );
 * }
 * ```
 */
export interface BottomSheetModalProps
    extends React.ComponentPropsWithRef<typeof Modal> {
    /**
     * Layout style of the bottom sheet.
     *
     * - `"standard"`: Attached to the bottom edge of the viewport.
     * - `"detached"`: Floating with margin and rounded corners on all edges.
     *
     * @default "standard"
     */
    layout?: SheetLayout;
}
