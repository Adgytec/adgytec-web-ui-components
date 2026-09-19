import clsx from "clsx";
import styles from "./listMedia.module.css";
import type { ListMediaProps } from "./types";

export const ListMedia: React.FC<ListMediaProps> = ({
    variant = "image",
    className,
    ...props
}) => {
    return (
        <div
            className={clsx(styles["media"], styles[variant], className)}
            {...props}
        />
    );
};
