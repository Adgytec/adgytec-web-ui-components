import type { Modal } from "react-aria-components";
import type { SheetLayout } from "../core";

/**
 * Alignment edge for a side sheet on the screen.
 *
 * - `"start"`: Anchors to the inline-start edge of the viewport (left in LTR, right in RTL).
 * - `"end"`: Anchors to the inline-end edge of the viewport (right in LTR, left in RTL).
 */
export type SideSheetAlignment = "start" | "end";

/**
 * Props for the {@link SideSheetModal} component.
 * Extends React Aria Components `Modal` props with side-sheet layout and alignment configurations.
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
 *             <Button label="Open Sheet" />
 *             <ModalOverlay>
 *                 <SideSheetModal alignment="end" layout="standard">
 *                     <SideSheet headline="Details">
 *                         <p>Side sheet content.</p>
 *                     </SideSheet>
 *                 </SideSheetModal>
 *             </ModalOverlay>
 *         </DialogTrigger>
 *     );
 * }
 * ```
 */
export interface SideSheetModalProps
    extends React.ComponentPropsWithRef<typeof Modal> {
    /**
     * Side of the screen where the side sheet appears.
     *
     * @default "end"
     */
    alignment?: SideSheetAlignment;

    /**
     * Layout style of the side sheet.
     *
     * - `"standard"`: Attached to the screen edge.
     * - `"detached"`: Floating with margin and rounded corners on all edges.
     *
     * @default "standard"
     */
    layout?: SheetLayout;
}
