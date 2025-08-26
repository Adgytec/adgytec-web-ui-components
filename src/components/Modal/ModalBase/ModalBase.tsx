import type { ModalBaseProps } from "./types";
import {
  DialogTrigger,
  Modal,
  ModalOverlay,
  Dialog,
} from "react-aria-components";
import styles from "./modalBase.module.css";
import { BaseCard, CardBackground } from "@/components/Card/BaseCard";

export const ModalBase = ({
  cardBackground = CardBackground.gradient,
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
        className={modalOverlayProps?.className ?? styles["modal-overlay"]}
      >
        <Modal {...modalProps} className={styles["modal"]}>
          <BaseCard background={cardBackground}>
            <Dialog {...dialogProps} />
          </BaseCard>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
