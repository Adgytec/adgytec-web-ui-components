import type { ReactNode } from "react";

/**
 * Content payload and options for a snackbar item in the queue.
 * Passed to `queue.add(content, options)`.
 *
 * @example
 * ```tsx
 * const queue = useSnackbarQueue();
 *
 * queue.add(
 *     {
 *         supportingText: "Message sent successfully.",
 *         action: (
 *             <Button color="text" onPress={() => console.log("Undo")}>
 *                 Undo
 *             </Button>
 *         ),
 *         hideCloseAction: false,
 *     },
 *     { timeout: 5000 }
 * );
 * ```
 */
export type SnackbarContent = {
    /**
     * Whether to hide the default close ("X") icon button.
     * When `false` or omitted, a close icon button is automatically rendered.
     *
     * @default false
     */
    hideCloseAction?: boolean;

    /**
     * Main message or descriptive text for the snackbar.
     * Styled using Material 3 `typography.bodyMedium`.
     */
    supportingText: ReactNode;

    /**
     * Optional action element (such as a text button) rendered alongside the supporting text.
     *
     * @example
     * ```tsx
     * action: <Button color="text" onPress={handleUndo}>Undo</Button>
     * ```
     */
    action?: ReactNode;
};

/**
 * Props for the {@link SnackbarRegion} component.
 *
 * Configurable CSS tokens:
 * - `--md-snackbar-background`: Background color of the snackbar (`var(--md-sys-color-inverse-surface)`).
 * - `--md-snackbar-color`: Text and icon color of the snackbar (`var(--md-sys-color-inverse-on-surface)`).
 * - `--md-snackbar-action-color`: Text color of the action button (`var(--md-sys-color-inverse-primary)`).
 *
 * @example
 * ```tsx
 * import { SnackbarRegion } from "@adgytec/web-ui-components";
 *
 * export function RootLayout({ children }: { children: React.ReactNode }) {
 *     return (
 *         <SnackbarRegion maxVisibleSnackbars={1}>
 *             {children}
 *         </SnackbarRegion>
 *     );
 * }
 * ```
 */
export interface SnackbarRegionProps {
    /**
     * Application content wrapped by the snackbar region.
     */
    children?: ReactNode;

    /**
     * The maximum number of snackbars displayed simultaneously in the region.
     *
     * @default 1
     */
    maxVisibleSnackbars?: number;
}
