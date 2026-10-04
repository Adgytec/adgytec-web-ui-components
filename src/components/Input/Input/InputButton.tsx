import clsx from "clsx";
import { IconButton, type IconButtonProps } from "@/components/Button";
import styles from "./input.module.css";

/**
 * Props for the {@link InputButton} component.
 * Extends {@link IconButtonProps} omitting fixed size, color, and width configurations.
 */
export interface InputButtonProps
    extends Omit<IconButtonProps, "color" | "size" | "width"> {}

/**
 * An action button tailored for placement within an {@link Input} container (e.g. password visibility toggle, clear button).
 */
export const InputButton: React.FC<InputButtonProps> = ({
    icon,
    className,
    ...props
}) => {
    return (
        <IconButton
            className={(renderProps) =>
                clsx(
                    styles["button"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            icon={icon}
            color="standard"
            size="small"
            width="default"
            {...props}
        />
    );
};
