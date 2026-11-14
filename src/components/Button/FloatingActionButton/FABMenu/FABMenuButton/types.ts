import type { FloatingActionButtonProps } from "../../FloatingActionButton";

export interface FABMenuButtonProps
    extends Omit<FloatingActionButtonProps, "color" | "variant"> {}
