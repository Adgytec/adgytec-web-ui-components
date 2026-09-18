import clsx from "clsx";
import { typography } from "@/utils";
import styles from "./listAvatar.module.css";

export const ListAvatar: React.FC<React.ComponentPropsWithRef<"div">> = ({
    className,
    ...props
}) => {
    return (
        <div
            className={clsx(
                styles["avatar"],
                typography.titleMedium,
                className
            )}
            {...props}
        />
    );
};
