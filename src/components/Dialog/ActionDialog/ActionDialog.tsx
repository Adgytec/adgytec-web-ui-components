import clsx from "clsx";
import { Heading } from "react-aria-components";
import { Icon } from "@/components/Icon";
import {
    DialogBodyTypography,
    DialogHeadlineTypography,
    DialogIconSize,
} from "../core";
import { Dialog } from "../Dialog";
import styles from "./actionDialog.module.css";
import type { ActionDialogProps } from "./types";

/**
 * A specialized dialog component pre-configured for standard alert, confirmation, and prompt patterns.
 *
 * Features an optional icon, title heading, scrollable body content area, and customizable action buttons.
 * Implements Material Design 3 guidelines for dialog layout alignment (such as centering the header when
 * an icon is provided) and configurable divider placements.
 *
 * @example
 * ```tsx
 * import { ActionDialog, Modal, ModalOverlay, Button } from '@adgytec/web-ui-components';
 * import { DialogTrigger } from 'react-aria-components';
 * import { AlertTriangle } from 'lucide-react';
 *
 * <DialogTrigger>
 *     <Button color="outlined">Delete Account</Button>
 *     <ModalOverlay isDismissable>
 *         <Modal>
 *             <ActionDialog
 *                 icon={AlertTriangle}
 *                 heading="Delete Account"
 *                 divider="before-actions"
 *                 actions={[
 *                     <Button key="cancel" color="text">Cancel</Button>,
 *                     <Button key="delete">Delete</Button>,
 *                 ]}
 *             >
 *                 Are you sure you want to delete your account? This action cannot be undone.
 *             </ActionDialog>
 *         </Modal>
 *     </ModalOverlay>
 * </DialogTrigger>
 * ```
 */
export const ActionDialog: React.FC<ActionDialogProps> = ({
    heading,
    icon,
    actions,
    children,
    divider = "none",
    ...props
}) => {
    const headingDivider = divider === "all" || divider === "after-heading";
    const actionDivider = divider === "all" || divider === "before-actions";
    const hasActions = Array.isArray(actions) ? actions.length > 0 : !!actions;

    return (
        <Dialog
            className={clsx(styles["action-dialog"])}
            {...props}
            data-dialog-head={!!heading || !!icon || undefined}
            data-actions={hasActions || undefined}
        >
            {(renderProps) => (
                <>
                    {(heading || icon) && (
                        <div
                            className={clsx(styles["heading-container"])}
                            data-icon={!!icon || undefined}
                            data-divider={headingDivider || undefined}
                        >
                            {icon && <Icon icon={icon} size={DialogIconSize} />}

                            {heading && (
                                <Heading
                                    slot="title"
                                    className={clsx(
                                        DialogHeadlineTypography,
                                        styles["heading"]
                                    )}
                                >
                                    {heading}
                                </Heading>
                            )}
                        </div>
                    )}

                    <div className={clsx(DialogBodyTypography, styles["body"])}>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                    </div>

                    {hasActions && (
                        <div
                            className={clsx(styles["action-container"])}
                            data-divider={actionDivider || undefined}
                        >
                            <div className={clsx(styles["actions"])}>
                                {typeof actions === "function"
                                    ? actions(renderProps)
                                    : actions}
                            </div>
                        </div>
                    )}
                </>
            )}
        </Dialog>
    );
};
