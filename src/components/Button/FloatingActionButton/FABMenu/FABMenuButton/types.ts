import type { FloatingActionButtonProps } from "../../FloatingActionButton";

/**
 * Props for the {@link FABMenuButton} component.
 * Extends {@link FloatingActionButtonProps} while omitting `color` and `variant`,
 * which are controlled automatically by {@link FABMenuTrigger}.
 */
export interface FABMenuButtonProps
    extends Omit<FloatingActionButtonProps, "color" | "variant"> {}
