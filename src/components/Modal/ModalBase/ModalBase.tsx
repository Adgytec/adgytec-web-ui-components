// TODO: api will be similar to react-aria

import { clsx } from "clsx";
import {
    Dialog,
    DialogTrigger,
    Modal,
    ModalOverlay,
} from "react-aria-components";
import { BaseCard } from "@/components/Card/BaseCard";
import styles from "./modalBase.module.css";
import type { ModalBaseProps } from "./types";

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
