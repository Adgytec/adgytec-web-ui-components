import clsx from "clsx";
import { Modal as AriaModal, composeRenderProps } from "react-aria-components";
import styles from "./modal.module.css";

/**
 * Props for the {@link Modal} component.
 * Extends React Aria's {@link AriaModal} props.
 */
export interface ModalProps
    extends React.ComponentPropsWithRef<typeof AriaModal> {}

/**
 * A modal positioning and transition wrapper for dialogs.
 *
 * Controls entrance and exit animations (such as zoom-in scaling) and centers
 * the enclosed dialog within the viewport or containing overlay.
 *
 * @example
 * ```tsx
 * import { Modal, ModalOverlay, Dialog } from '@adgytec/web-ui-components';
 *
 * <ModalOverlay isDismissable>
 *     <Modal>
 *         <Dialog>Modal content goes here</Dialog>
 *     </Modal>
 * </ModalOverlay>
 * ```
 */
export const Modal: React.FC<ModalProps> = ({ ...props }) => {
    return (
        <AriaModal
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["modal"], className)
            )}
        />
    );
};
