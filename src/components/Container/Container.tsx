import { clsx } from "clsx";
import styles from "./container.module.css";
import type { ContainerProps } from "./types";

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
