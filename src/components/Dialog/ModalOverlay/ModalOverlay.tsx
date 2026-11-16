import clsx from "clsx";
import {
    ModalOverlay as AriaModalOverlay,
    composeRenderProps,
} from "react-aria-components";
import styles from "./modalOverlay.module.css";

/**
 * Props for the {@link ModalOverlay} component.
 * Extends React Aria's {@link AriaModalOverlay} props.
 */
export interface ModalOverlayProps
    extends React.ComponentPropsWithRef<typeof AriaModalOverlay> {}

/**
 * A scrim backdrop overlay rendered behind modal dialogs.
 *
 * Applies the Material Design 3 backdrop scrim tint (`--md-dialog-overlay`),
 * handles entry/exit fade animations, locks background body scrolling, and can dismiss
 * the dialog on outside click when configured with `isDismissable`.
 *
 * @example
 * ```tsx
 * import { ModalOverlay, Modal, Dialog } from '@adgytec/web-ui-components';
 *
 * <ModalOverlay isDismissable>
 *     <Modal>
 *         <Dialog>Dialog Content</Dialog>
 *     </Modal>
 * </ModalOverlay>
 * ```
 */
export const ModalOverlay: React.FC<ModalOverlayProps> = ({ ...props }) => {
    return (
        <AriaModalOverlay
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["overlay"], className)
            )}
        />
    );
};
