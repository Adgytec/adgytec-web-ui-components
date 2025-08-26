import { SidebarPosition, SidebarSize, type SidebarProps } from "./types";
import {
  DialogTrigger,
  Modal,
  ModalOverlay,
  Dialog,
} from "react-aria-components";
import styles from "./sidebar.module.css";
import { BaseCard, CardBackground } from "../Card/BaseCard";

export const Sidebar = ({
  children,
  trigger,
  sidebarPosition = SidebarPosition.inlineStart,
  sidebarSize = SidebarSize.full,
  isDismissable,
  isKeyboardDismissableDisabled,
  cardBackground = CardBackground.gradient,
}: SidebarProps) => {
  const isChildrenFunction = typeof children === "function";

  return (
    <DialogTrigger>
      {trigger}

      <ModalOverlay
        className={`${styles["modal-overlay"]}`}
        isDismissable={isDismissable}
        isKeyboardDismissDisabled={isKeyboardDismissableDisabled}
      >
        <Modal
          className={`${styles["modal"]} ${styles[sidebarPosition]} ${styles[sidebarSize]}`}
        >
          <BaseCard background={cardBackground}>
            <Dialog>
              {isChildrenFunction ? (opts) => children(opts) : children}
            </Dialog>
          </BaseCard>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};
