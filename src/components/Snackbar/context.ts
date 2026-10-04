import { createContext, useContext } from "react";
import type { UNSTABLE_ToastQueue as ToastQueue } from "react-aria-components";
import type { SnackbarContent } from "./types";

/**
 * React context holding the active `ToastQueue` instance for snackbars,
 * or `null` if accessed outside a {@link SnackbarRegion}.
 */
export const SnackbarQueueContext =
    createContext<ToastQueue<SnackbarContent> | null>(null);

/**
 * Hook to access the active snackbar queue from any child component within a {@link SnackbarRegion}.
 *
 * Returns the underlying React Aria `ToastQueue` instance, allowing components
 * to enqueue new snackbars, dismiss existing ones, or inspect the queue.
 *
 * @throws {Error} If called outside of a {@link SnackbarRegion}.
 *
 * @example
 * ```tsx
 * import { Button, useSnackbarQueue } from "@adgytec/web-ui-components";
 *
 * export function CopyButton({ text }: { text: string }) {
 *     const snackbarQueue = useSnackbarQueue();
 *
 *     const handleCopy = async () => {
 *         await navigator.clipboard.writeText(text);
 *         snackbarQueue.add(
 *             {
 *                 supportingText: "Copied to clipboard",
 *                 action: (
 *                     <Button color="text" onPress={() => console.log("Undo")}>
 *                         Undo
 *                     </Button>
 *                 ),
 *             },
 *             { timeout: 4000 }
 *         );
 *     };
 *
 *     return <Button onPress={handleCopy}>Copy</Button>;
 * }
 * ```
 */
export function useSnackbarQueue() {
    const queue = useContext(SnackbarQueueContext);

    if (!queue) {
        throw new Error("useSnackbarQueue must be used inside SnackbarRegion");
    }

    return queue;
}
