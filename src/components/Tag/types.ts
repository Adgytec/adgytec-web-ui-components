import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { Tag } from "react-aria-components";

/**
 * Props for the {@link Tag} component.
 * Extends React Aria Components `Tag` props (omitting raw `children` in favor of structured `label`, `icon`, and `avatar`).
 *
 * Configurable CSS tokens:
 * - `--md-chip-background-color`: Background color of the tag in its default state (`var(--md-sys-color-surface-container-low)`).
 * - `--md-chip-selected-background-color`: Background color of the tag when selected (`var(--md-sys-color-secondary-container)`).
 * - `--md-chip-icon-color`: Color of the icon in its default state (`var(--md-sys-color-primary)`).
 * - `--md-chip-selected-icon-color`: Color of the icon when selected (`var(--md-sys-color-on-secondary-container)`).
 * - `--md-chip-label-color`: Color of the label text in its default state (`var(--md-sys-color-on-surface-variant)`).
 * - `--md-chip-selected-label-color`: Color of the label text when selected (`var(--md-sys-color-on-secondary-container)`).
 *
 * @example
 * ```tsx
 * import { Tag } from "@adgytec/web-ui-components";
 * import { User } from "lucide-react";
 *
 * export function Example() {
 *     return (
 *         <Tag
 *             id="user-profile"
 *             label="Profile"
 *             icon={User}
 *         />
 *     );
 * }
 * ```
 */
export interface TagProps
    extends Omit<React.ComponentPropsWithRef<typeof Tag>, "children"> {
    /**
     * Text content displayed within the tag.
     */
    label: string;

    /**
     * Optional icon displayed at the start of the tag.
     * When the tag is selected in a selection group, this icon is automatically replaced by a checkmark.
     * If both `icon` and `avatar` are provided, `avatar` takes precedence.
     */
    icon?: LucideIcon;

    /**
     * Optional avatar element displayed at the start of the tag.
     * Rendered inside a circular constraint container (`24px`).
     * Takes precedence over `icon` when both are provided.
     *
     * @example
     * ```tsx
     * avatar={<img src="/avatar.png" alt="Jane" />}
     * ```
     */
    avatar?: ReactNode;
}
