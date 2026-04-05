// TODO: will be removed unnecessary abstraction

import clsx from "clsx";
import { Button } from "@/components/Button";
import { ModalBase } from "@/components/Modal/ModalBase/ModalBase";
import styles from "./modalAction.module.css";
import type { ModalActionProps } from "./types";

export const ModalAction = ({
    trigger,
    header,
    children,
    actionPlacement = "start",
    modalAction,
    closeText,
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
                    <div className={clsx(styles["modal"])}>
                        {header && (
                            <h2 className={clsx(styles["modal-header"])}>
                                {header}
                            </h2>
                        )}

                        <div className={clsx(styles["modal-content"])}>
                            {children}
                        </div>

                        <div
                            className={clsx(
                                styles["modal-action"],
                                styles[actionPlacement]
                            )}
                        >
                            {isActionFunction
                                ? modalAction({ close })
                                : modalAction}

                            <Button
                                variant="text"
                                onPress={close}
                                theme="inverse-surface"
                            >
                                {closeText}
                            </Button>
                        </div>
                    </div>
                );
            }}
        </ModalBase>
    );
};
