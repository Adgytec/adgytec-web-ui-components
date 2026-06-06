import clsx from "clsx";
import { IconButton, type IconButtonProps } from "@/components/Button";
import styles from "./appBarAction.module.css";

export const AppBarAction: React.FC<Omit<IconButtonProps, "size">> = ({
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
            {...props}
            color={color}
            size="small"
        />
    );
};
