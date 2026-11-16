import clsx from "clsx";
import { composeRenderProps } from "react-aria-components";
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
export const InputButton: React.FC<InputButtonProps> = ({ icon, ...props }) => {
    return (
        <IconButton
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["button"], className)
            )}
            icon={icon}
            color="standard"
            size="small"
            width="default"
        />
    );
};
