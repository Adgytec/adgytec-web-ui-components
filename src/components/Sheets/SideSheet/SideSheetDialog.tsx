import clsx from "clsx";
import { useContext } from "react";
import { Dialog } from "react-aria-components";
import { DialogContext } from "@/components/Dialog";
import { SideSheetContext } from "../SideSheetModal";
import styles from "./sideSheet.module.css";
import type { SideSheetDialogProps } from "./types";

/**
 * Low-level dialog container for side sheets, useful for custom layout structures.
 *
 * Consumes {@link SideSheetContext} to apply appropriate `data-alignment` and `data-layout`
 * attributes for responsive positioning, border radiuses, and size constraints.
 * Also provides `DialogContext` with `true` for modal integration.
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
 *             <Button label="Open Custom Sheet" />
 *             <ModalOverlay>
 *                 <SideSheetModal alignment="end" layout="standard">
 *                     <SideSheetDialog>
 *                         {({ close }) => (
 *                             <>
 *                                 <Header>
 *                                     <Heading slot="title">Custom Title</Heading>
 *                                     <IconButton icon={X} onPress={close} aria-label="Close" />
 *                                 </Header>
 *                                 <div>Custom content goes here.</div>
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
export const SideSheetDialog: React.FC<SideSheetDialogProps> = ({
    className,
    ...props
}) => {
    const { layout, alignment } = useContext(SideSheetContext);

    return (
        <DialogContext value={true}>
            <Dialog
                className={clsx(styles["side-sheet-dialog"], className)}
                data-alignment={alignment}
                data-layout={layout}
                {...props}
            />
        </DialogContext>
    );
};
