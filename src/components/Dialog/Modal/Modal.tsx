import clsx from "clsx";
import { Modal as AriaModal } from "react-aria-components";
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
export const Modal: React.FC<ModalProps> = ({ className, ...props }) => {
    return (
        <AriaModal
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
    );
};
