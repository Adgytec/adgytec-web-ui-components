import type { LucideIcon } from "lucide-react";
import styles from "./button.module.css";
import type { AllButtonColor, ButtonColor, IconButtonColor } from "./color";
import type { ButtonShape } from "./shape";
import type { ButtonSize } from "./sizes";
import type { IconButtonWidth } from "./width";

export interface ButtonBaseProps {
    color?: ButtonColor;
    size?: ButtonSize;
    shape?: ButtonShape;
    tooltip?: string;
    icon?: LucideIcon;
    iconPlacement?: "start" | "end";
}

export interface IconButtonBaseProps {
    color?: IconButtonColor;
    size?: ButtonSize;
    shape?: ButtonShape;
    width?: IconButtonWidth;
    tooltip?: string;
    icon: LucideIcon;
}

export const ButtonReset = styles["button-reset"];
export const ButtonCore = styles["button-core"];

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
