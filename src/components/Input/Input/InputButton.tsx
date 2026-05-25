import clsx from "clsx";
import { IconButton, type IconButtonProps } from "@/components/Button";
import styles from "./input.module.css";

export const InputButton: React.FC<
    Omit<IconButtonProps, "color" | "size" | "width">
> = ({ icon, className, ...props }) => {
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
