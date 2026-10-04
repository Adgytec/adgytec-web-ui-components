import { createContext, useContext } from "react";

/**
 * Context provided by the {@link Dialog} component to indicate whether children are rendered inside a dialog.
 */
export const DialogContext = createContext<boolean | null>(null);

/**
 * Hook that returns whether the calling component is currently rendered within a {@link Dialog}.
 *
 * @returns `true` if within a Dialog context, otherwise `false`.
 */
export function useInDialog() {
    return useContext(DialogContext) === true;
}
