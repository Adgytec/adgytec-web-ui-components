import type { ContainerProps } from "./types";
import styles from "./container.module.css";
import { clsx } from "clsx";

export const Container: React.FC<ContainerProps> = ({
    variant = "default",
    className,
    ...props
}) => {
    return (
        <div
            className={clsx(styles["container"], styles[variant], className)}
            {...props}
        />
    );
};
