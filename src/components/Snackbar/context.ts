import { createContext, useContext } from "react";
import type { UNSTABLE_ToastQueue as ToastQueue } from "react-aria-components";
import type { SnackbarContent } from "./types";

export const SnackbarQueueContext =
    createContext<ToastQueue<SnackbarContent> | null>(null);

export function useSnackbarQueue() {
    const queue = useContext(SnackbarQueueContext);

    if (!queue) {
        throw new Error("useSnackbarQueue must be used inside SnackbarRegion");
    }

    return queue;
}
