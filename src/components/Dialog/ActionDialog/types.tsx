import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { Dialog, DialogRenderProps } from "react-aria-components";

/**
 * Visual divider placement options for {@link ActionDialog}.
 *
 * - `"none"`: No dividing borders (default).
 * - `"all"`: Dividing borders both below the heading and above the action buttons.
 * - `"after-heading"`: Border directly below the heading.
 * - `"before-actions"`: Border directly above the action buttons.
 */
export type ActionDialogDividerPlacement =
    | "none"
    | "all"
    | "after-heading"
    | "before-actions";

/**
 * Props for the {@link ActionDialog} component.
 * Extends React Aria's `Dialog` props (excluding `className`).
 */
export interface ActionDialogProps
    extends Omit<React.ComponentPropsWithRef<typeof Dialog>, "className"> {
    /** The title text displayed in the dialog header. */
    heading?: string;

    /**
     * An optional icon displayed within the dialog header.
     * When present, header content is centered per Material Design 3 guidelines.
     */
    icon?: LucideIcon;

    /**
     * Action elements (typically `Button` components) rendered at the bottom of the dialog.
     * Can be an array of nodes or a render function receiving {@link DialogRenderProps}.
     */
    actions?: ReactNode[] | ((renderProps: DialogRenderProps) => ReactNode[]);

    /**
     * Placement of dividing borders between header, scrollable body, and action footer.
     *
     * @default "none"
     */
    divider?: ActionDialogDividerPlacement;
}
