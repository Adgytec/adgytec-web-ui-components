import type { Dialog } from "react-aria-components";

/**
 * Props for the {@link BottomSheet} component.
 * Extends React Aria Components `Dialog` props for bottom sheet content containers.
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
 *             <Button label="Open Sheet" />
 *             <ModalOverlay>
 *                 <BottomSheetModal layout="standard">
 *                     <BottomSheet>
 *                         <p>Bottom sheet content goes here.</p>
 *                     </BottomSheet>
 *                 </BottomSheetModal>
 *             </ModalOverlay>
 *         </DialogTrigger>
 *     );
 * }
 * ```
 */
export interface BottomSheetProps
    extends React.ComponentPropsWithRef<typeof Dialog> {}
