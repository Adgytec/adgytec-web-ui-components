import type { ReactNode } from "react";
import type { Dialog, DialogRenderProps } from "react-aria-components";

/**
 * Props for the {@link SideSheetDialog} component.
 * Extends React Aria Components `Dialog` props for low-level custom side sheet layouts.
 *
 * Configurable CSS tokens:
 * - `--md-side-sheet-background`: Background color of the side sheet (`var(--md-sys-color-surface-container-low)`).
 * - `--md-side-sheet-color`: Text color of the side sheet (`var(--md-sys-color-on-surface)`).
 * - `--md-side-sheet-headline-color`: Color of the side sheet headline (`var(--md-sys-color-on-surface-variant)`).
 *
 * @example
 * ```tsx
 * import { DialogTrigger, Header, Heading } from "react-aria-components";
 * import {
 *     Button,
 *     IconButton,
 *     ModalOverlay,
 *     SideSheetDialog,
 *     SideSheetModal,
 * } from "@adgytec/web-ui-components";
 * import { X } from "lucide-react";
 *
 * export function Example() {
 *     return (
 *         <DialogTrigger>
 *             <Button label="Open Sheet" />
 *             <ModalOverlay>
 *                 <SideSheetModal alignment="end">
 *                     <SideSheetDialog>
 *                         {({ close }) => (
 *                             <>
 *                                 <Header>
 *                                     <Heading slot="title">Custom Layout</Heading>
 *                                     <IconButton icon={X} onPress={close} aria-label="Close" />
 *                                 </Header>
 *                                 <div>Content goes here</div>
 *                             </>
 *                         )}
 *                     </SideSheetDialog>
 *                 </SideSheetModal>
 *             </ModalOverlay>
 *         </DialogTrigger>
 *     );
 * }
 * ```
 */
export interface SideSheetDialogProps
    extends React.ComponentPropsWithRef<typeof Dialog> {}

/**
 * Props for the {@link SideSheet} component.
 * Extends React Aria Components `Dialog` props with optional headline and footer action buttons.
 *
 * Configurable CSS tokens:
 * - `--md-side-sheet-background`: Background color of the side sheet (`var(--md-sys-color-surface-container-low)`).
 * - `--md-side-sheet-color`: Text color of the side sheet (`var(--md-sys-color-on-surface)`).
 * - `--md-side-sheet-headline-color`: Color of the side sheet headline (`var(--md-sys-color-on-surface-variant)`).
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
 *             <Button label="Open Filters" />
 *             <ModalOverlay>
 *                 <SideSheetModal alignment="end" layout="standard">
 *                     <SideSheet
 *                         headline="Filter Items"
 *                         actions={[
 *                             <Button key="apply" label="Apply" onPress={() => {}} />,
 *                             <Button key="reset" label="Reset" variant="outline" onPress={() => {}} />,
 *                         ]}
 *                     >
 *                         <p>Filter options go here.</p>
 *                     </SideSheet>
 *                 </SideSheetModal>
 *             </ModalOverlay>
 *         </DialogTrigger>
 *     );
 * }
 * ```
 */
export interface SideSheetProps
    extends React.ComponentPropsWithRef<typeof Dialog> {
    /**
     * Optional headline text or element displayed in the side sheet header.
     * Rendered inside a React Aria `Heading` using `typography.titleLarge`.
     */
    headline?: ReactNode;

    /**
     * Optional action buttons rendered in the bottom action bar.
     * Can be an array of React nodes or a render function receiving React Aria `DialogRenderProps` (such as `close`).
     */
    actions?: ReactNode[] | ((renderProps: DialogRenderProps) => ReactNode[]);
}
