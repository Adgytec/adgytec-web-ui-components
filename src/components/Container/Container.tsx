import type { ContainerProps } from "./types";
import styles from "./container.module.css";

export const Container: React.FC<ContainerProps> = ({
    varaint = "default",
    className,
    ...props
}) => {
    return (
        <div
            className={` ${styles["container"]} ${styles[varaint]} ${className}`}
            {...props}
        />
    );
};
