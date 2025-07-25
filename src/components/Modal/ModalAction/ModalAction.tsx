import { ModalBase } from "../ModalBase/ModalBase";
import {
  ModalActionPlacement,
  ModalCloseText,
  type ModalActionProps,
} from "./types";
import styles from "./modalAction.module.css";
import { TextButton } from "../../Button/TextButton";
import { ColorTheme } from "../../../utils/types";

export const ModalAction = ({
  trigger,
  header,
  children,
  actionPlacement = ModalActionPlacement.start,
  modalAction,
  closeText = ModalCloseText.close,
  isDismissable,
  isKeyboardDismissableDisabled,
}: ModalActionProps) => {
  const isActionFunction = typeof modalAction === "function";

  return (
    <ModalBase
      trigger={trigger}
      modalOverlayProps={{
        isDismissable: isDismissable,
        isKeyboardDismissDisabled: isKeyboardDismissableDisabled,
      }}
    >
      {({ close }) => {
        return (
          <div className={`${styles["modal"]}`}>
            {header && (
              <h2 className={`${styles["modal-header"]}`}>{header}</h2>
            )}

            <div className={`${styles["modal-content"]}`}>{children}</div>

            <div
              className={`${styles["modal-action"]} ${styles[actionPlacement]}`}
            >
              {isActionFunction ? modalAction({ close }) : modalAction}

              <TextButton onPress={close} theme={ColorTheme.inverseSurface}>
                {closeText}
              </TextButton>
            </div>
          </div>
        );
      }}
    </ModalBase>
  );
};
