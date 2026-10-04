import type { LucideIcon } from "lucide-react";

/**
 * Predefined icon size presets aligning with Material Design 3 icon specifications.
 *
 * - `"dense"`: Compact size (`--md-sys-icon-dense`, typically 18px).
 * - `"standard"`: Default body icon size (`--md-sys-icon-standard`, typically 24px).
 * - `"medium"`: Medium accent size (`--md-sys-icon-medium`, typically 32px).
 * - `"large"`: Large hero or feature size (`--md-sys-icon-large`, typically 40px).
 * - `"extra-large"`: Extra large display size (`--md-sys-icon-extra-large`, typically 48px).
 */
export type IconSize =
    | "dense"
    | "standard"
    | "medium"
    | "large"
    | "extra-large";

/**
 * Props for the {@link Icon} component.
 * Extends Lucide SVG props while overriding `size` to support design system presets or pixel values.
 */
export interface IconProps
    extends Omit<React.ComponentPropsWithRef<LucideIcon>, "size"> {
    /**
     * The Lucide icon component to render.
     */
    icon: LucideIcon;

    /**
     * The size of the icon. Accepts a predefined design system preset or an exact numeric pixel value.
     * Note: Ignored when {@link withText} is `true`.
     *
     * @default "standard"
     */
    size?: IconSize | number;

    /**
     * When `true`, dimensions are set to `1em` by `1em`, allowing the icon to scale dynamically
     * with the font size of the surrounding text or typography element.
     *
     * @default false
     */
    withText?: boolean;
}
