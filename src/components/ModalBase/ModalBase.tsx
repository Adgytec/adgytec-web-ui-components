import type { ModalBaseProps } from "./types";
import {
  DialogTrigger,
  Modal,
  ModalOverlay,
  Dialog,
} from "react-aria-components";
import styles from "./modalBase.module.css";
import { ColorTheme } from "../../utils/types";

const ModalBase = ({
  theme = ColorTheme.inverseSurface,
  trigger,
  children,
  isDismissable,
  isKeyboardDismissableDisabled,
}: ModalBaseProps) => {
  const isChildrenFunction = typeof children === "function";

  return (
    <DialogTrigger>
      {trigger}

      <ModalOverlay
        className={`${styles["modal-overlay"]}`}
        isDismissable={isDismissable}
        isKeyboardDismissDisabled={isKeyboardDismissableDisabled}
      >
        <Modal className={`${styles["modal"]} ${styles[theme]}`}>
          <Dialog>
            {isChildrenFunction ? (opts) => children(opts) : children}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default ModalBase;
