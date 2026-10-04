import clsx from "clsx";
import { Dialog as AriaDialog } from "react-aria-components";
import { DialogContext } from "../core";
import styles from "./dialog.module.css";

/**
 * Props for the {@link Dialog} component.
 * Extends React Aria's {@link AriaDialog} props.
 */
export interface DialogProps
    extends React.ComponentPropsWithRef<typeof AriaDialog> {}

/**
 * A dialog container component implementing Material Design 3 Dialog specifications.
 *
 * Appears in front of application content to present critical alerts, information, or request
 * user confirmation. Provides context to nested elements via {@link DialogContext} and manages
 * focus trapping, accessible labeling (`slot="title"`), and keyboard escape behavior.
 *
 * @example
 * ```tsx
 * import { Dialog, Modal, ModalOverlay, Button } from '@adgytec/web-ui-components';
 * import { DialogTrigger, Heading } from 'react-aria-components';
 *
 * <DialogTrigger>
 *     <Button>Open Dialog</Button>
 *     <ModalOverlay>
 *         <Modal>
 *             <Dialog>
 *                 <Heading slot="title">Discard draft?</Heading>
 *                 <p>Draft will be permanently removed.</p>
 *             </Dialog>
 *         </Modal>
 *     </ModalOverlay>
 * </DialogTrigger>
 * ```
 */
export const Dialog: React.FC<DialogProps> = ({ className, ...props }) => {
    return (
        <DialogContext value={true}>
            <AriaDialog
                className={clsx(styles["dialog"], className)}
                {...props}
            />
        </DialogContext>
    );
};
