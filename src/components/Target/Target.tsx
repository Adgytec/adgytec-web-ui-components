import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";
import styles from "./target.module.css";

type TargetProps = ComponentPropsWithRef<"div">;

export const Target: React.FC<TargetProps> = ({ className, ...props }) => {
    return <div className={clsx(styles["target"], className)} {...props} />;
};
