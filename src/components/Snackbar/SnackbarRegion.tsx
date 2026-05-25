import { clsx } from "clsx";
import { X } from "lucide-react";
import { useMemo } from "react";
import {
    Text,
    UNSTABLE_Toast as Toast,
    UNSTABLE_ToastContent as ToastContent,
    UNSTABLE_ToastQueue as ToastQueue,
    UNSTABLE_ToastRegion as ToastRegion,
} from "react-aria-components";
import { flushSync } from "react-dom";
import { IconButton } from "../Button";
import { SnackbarQueueContext } from "./context";
import styles from "./snackbar.module.css";
import type { SnackbarContent, SnackbarRegionProps } from "./types";

export const SnackbarRegion: React.FC<SnackbarRegionProps> = ({
    children,
    maxVisibleSnackbars = 1,
}) => {
    const queue = useMemo(() => {
        return new ToastQueue<SnackbarContent>({
            maxVisibleToasts: maxVisibleSnackbars,

            wrapUpdate(fn) {
                if ("startViewTransition" in document) {
                    document.startViewTransition(() => {
                        flushSync(fn);
                    });
                } else {
                    fn();
                }
            },
        });
    }, [maxVisibleSnackbars]);

    return (
        <SnackbarQueueContext value={queue}>
            {children}
            <ToastRegion queue={queue} className={clsx(styles["toast-region"])}>
                {({ toast }) => (
                    <Toast
                        toast={toast}
                        className={clsx(styles["toast"])}
                        style={{ viewTransitionName: toast.key }}
                    >
                        <ToastContent className={styles["toast-region"]}>
                            <Text slot="description">
                                {toast.content.supportingText}
                            </Text>

                            {toast.content.action}
                        </ToastContent>

                        {!toast.content.hideCloseAction && (
                            <IconButton
                                slot="close"
                                icon={X}
                                color="standard"
                            />
                        )}
                    </Toast>
                )}
            </ToastRegion>
        </SnackbarQueueContext>
    );
};
