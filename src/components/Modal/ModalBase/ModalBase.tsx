import type { ModalBaseProps } from "./types";
import {
  DialogTrigger,
  Modal,
  ModalOverlay,
  Dialog,
} from "react-aria-components";
import styles from "./modalBase.module.css";

export const ModalBase = ({
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
          <Dialog {...dialogProps} />
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
