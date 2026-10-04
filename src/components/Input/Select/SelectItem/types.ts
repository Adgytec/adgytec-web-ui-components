import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { ListBoxItem } from "react-aria-components";

/**
 * Props for the {@link SelectItem} component.
 * Extends React Aria's `ListBoxItem` props (excluding `children`).
 */
export interface SelectItemProps
    extends Omit<React.ComponentPropsWithRef<typeof ListBoxItem>, "children"> {
    /** Optional leading icon displayed before the label text. */
    leadingIcon?: LucideIcon;

    /** The primary text label of the selection item. */
    label: string;

    /** Secondary descriptive supporting text placed beneath the label. */
    supportingText?: string;

    /** Optional trailing text content (e.g. keyboard shortcut or counter). */
    trailingText?: ReactNode;

    /** Optional trailing icon displayed at the far end of the item. */
    trailingIcon?: LucideIcon;
}
