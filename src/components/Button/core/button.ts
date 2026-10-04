import type { LucideIcon } from "lucide-react";
import styles from "./button.module.css";
import type { AllButtonColor, ButtonColor, IconButtonColor } from "./color";
import type { ButtonShape } from "./shape";
import type { ButtonSize } from "./sizes";
import type { IconButtonWidth } from "./width";

/**
 * Determines whether an icon inside a button is rendered before or after the text label.
 *
 * - `"start"`: Renders icon at the leading edge (before text).
 * - `"end"`: Renders icon at the trailing edge (after text).
 */
export type ButtonIconPlacement = "start" | "end";

/**
 * Core props shared across standard text/label button components (e.g. `Button`, `LinkButton`).
 */
export interface ButtonBaseProps {
    /** Visual style and color scheme of the button. Defaults to `"filled"`. */
    color?: ButtonColor;
    /** Size scale of the button. Defaults to `"small"`. */
    size?: ButtonSize;
    /** Corner rounding style (`"round"` or `"square"`). Defaults to `"round"`. */
    shape?: ButtonShape;
    /** Optional tooltip text displayed on hover/focus. */
    tooltip?: string;
    /** Optional Lucide icon component displayed alongside label text. */
    icon?: LucideIcon;
    /** Icon placement relative to label text (`"start"` or `"end"`). Defaults to `"start"`. */
    iconPlacement?: ButtonIconPlacement;
}

/**
 * Core props shared across icon-only button components (e.g. `IconButton`, `LinkIconButton`).
 */
export interface IconButtonBaseProps {
    /** Visual style and color scheme of the icon button. Defaults to `"standard"`. */
    color?: IconButtonColor;
    /** Size scale of the icon button. Defaults to `"small"`. */
    size?: ButtonSize;
    /** Corner rounding style (`"round"` or `"square"`). Defaults to `"round"`. */
    shape?: ButtonShape;
    /** Width variation (`"narrow"`, `"default"`, or `"wide"`). Defaults to `"default"`. */
    width?: IconButtonWidth;
    /** Optional tooltip text displayed on hover/focus. */
    tooltip?: string;
    /** Required Lucide icon component rendered inside the button. */
    icon: LucideIcon;
}

/** CSS class resetting default button/link styling (outlines, borders, backgrounds). */
export const ButtonReset = styles["button-reset"];

/** CSS class providing the core layout and flex alignment for button internals. */
export const ButtonCore = styles["button-core"];

/**
 * Generates standard data attributes (`data-shape`, `data-size`, `data-color`)
 * applied to button DOM nodes for CSS attribute styling.
 *
 * @param options - Shape, size, and color configuration.
 * @returns Object with data attributes for spreading onto elements.
 */
export function newButtonBaseDataAttrs({
    shape,
    size,
    color,
}: {
    shape: ButtonShape;
    color: AllButtonColor;
    size: ButtonSize;
}) {
    return {
        "data-shape": shape,
        "data-size": size,
        "data-color": color,
    };
}
