import clsx from "clsx";
import { IconButton, type IconButtonProps } from "@/components/Button";
import styles from "./listAction.module.css";

export const ListAction: React.FC<Omit<IconButtonProps, "size">> = ({
    color = "standard",
    className,
    ...props
}) => {
    return (
        <IconButton
            className={(renderProps) =>
                clsx(
                    styles["action"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            size="small"
            color={color}
            {...props}
        />
    );
};
