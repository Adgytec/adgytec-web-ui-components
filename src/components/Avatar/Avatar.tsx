import clsx from "clsx";
import styles from "./avatar.module.css";
import type { AvatarProps } from "./types";

export const Avatar: React.FC<AvatarProps> = ({
    children,
    size = "normal",
    theme = "primary",
}) => {
    return (
        <div className={clsx(styles.avatar, styles[size], theme)}>
            {children}
        </div>
    );
};
