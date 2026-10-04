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
import { typography } from "@/utils";
import { IconButton } from "../Button";
import { SnackbarQueueContext } from "./context";
import styles from "./snackbar.module.css";
import type { SnackbarContent, SnackbarRegionProps } from "./types";

/**
 * Root region component for managing and rendering [Material 3 Snackbars](https://m3.material.io/components/snackbar/overview).
 *
 * Wraps your application or a section of it to provide a snackbar context via {@link SnackbarQueueContext}.
 * Renders an underlying React Aria `ToastRegion` fixed at the bottom center of the viewport (elevated with
 * high z-index), displaying queued snackbar notifications with supporting text, optional actions,
 * and an optional dismiss button.
 *
 * Configurable CSS tokens:
 * - `--md-snackbar-background`: Background color of the snackbar (`var(--md-sys-color-inverse-surface)`).
 * - `--md-snackbar-color`: Text and icon color of the snackbar (`var(--md-sys-color-inverse-on-surface)`).
 * - `--md-snackbar-action-color`: Text color of the action button (`var(--md-sys-color-inverse-primary)`).
 *
 * @example
 * ```tsx
 * import {
 *     Button,
 *     SnackbarRegion,
 *     useSnackbarQueue,
 * } from "@adgytec/web-ui-components";
 *
 * function NotificationTrigger() {
 *     const queue = useSnackbarQueue();
 *
 *     const showNotification = () => {
 *         queue.add(
 *             {
 *                 supportingText: "File uploaded successfully.",
 *                 action: (
 *                     <Button color="text" onPress={() => console.log("View")}>
 *                         View
 *                     </Button>
 *                 ),
 *             },
 *             { timeout: 5000 }
 *         );
 *     };
 *
 *     return <Button onPress={showNotification}>Upload</Button>;
 * }
 *
 * export function App() {
 *     return (
 *         <SnackbarRegion maxVisibleSnackbars={1}>
 *             <NotificationTrigger />
 *         </SnackbarRegion>
 *     );
 * }
 * ```
 */
export const SnackbarRegion: React.FC<SnackbarRegionProps> = ({
    children,
    maxVisibleSnackbars = 1,
}) => {
    const queue = useMemo(() => {
        return new ToastQueue<SnackbarContent>({
            maxVisibleToasts: maxVisibleSnackbars,
        });
    }, [maxVisibleSnackbars]);

    return (
        <SnackbarQueueContext value={queue}>
            {children}
            <ToastRegion
                queue={queue}
                className={clsx(styles["snackbar-region"])}
            >
                {({ toast }) => (
                    <Toast
                        toast={toast}
                        className={clsx(styles["snackbar"])}
                        data-close={!toast.content.hideCloseAction || undefined}
                        data-action={
                            (toast.content.hideCloseAction &&
                                !!toast.content.action) ||
                            undefined
                        }
                    >
                        <ToastContent className={styles["snackbar-content"]}>
                            <Text
                                slot="description"
                                className={clsx(
                                    styles["text"],
                                    typography.bodyMedium
                                )}
                            >
                                {toast.content.supportingText}
                            </Text>

                            {toast.content.action}
                        </ToastContent>

                        {!toast.content.hideCloseAction && (
                            <IconButton
                                slot="close"
                                icon={X}
                                color="standard"
                                data-close-button
                            />
                        )}
                    </Toast>
                )}
            </ToastRegion>
        </SnackbarQueueContext>
    );
};
