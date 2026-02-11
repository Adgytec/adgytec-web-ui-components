import type { ModalBaseProps } from "./types";
import {
    DialogTrigger,
    Modal,
    ModalOverlay,
    Dialog,
} from "react-aria-components";
import styles from "./modalBase.module.css";
import { BaseCard } from "@/components/Card/BaseCard";
import { clsx } from "clsx";

export const ModalBase = ({
    cardBackground = "gradient",
    trigger,
    modalOverlayProps,
    dialogTriggerProps,
    modalProps,
    ...dialogProps
}: ModalBaseProps) => {
    return (
        <DialogTrigger {...dialogTriggerProps}>
            {trigger}

            <ModalOverlay
                {...modalOverlayProps}
                className={clsx(
                    styles["modal-overlay"],
                    modalOverlayProps?.className
                )}
            >
                <Modal {...modalProps} className={clsx(styles["modal"])}>
                    <BaseCard background={cardBackground}>
                        <Dialog {...dialogProps} />
                    </BaseCard>
                </Modal>
            </ModalOverlay>
        </DialogTrigger>
    );
};
