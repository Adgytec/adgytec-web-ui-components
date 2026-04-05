import clsx from "clsx";
import styles from "./avatar.module.css";
import type { AvatarNodeProps } from "./types";

export const AvatarNode: React.FC<AvatarNodeProps> = ({ children }) => {
    return <div className={clsx(styles["node"])}>{children}</div>;
};
