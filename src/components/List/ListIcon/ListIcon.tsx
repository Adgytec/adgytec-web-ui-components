import clsx from "clsx";
import { Icon } from "@/components/Icon";
import styles from "./listIcon.module.css";

export const ListIcon: React.FC<
    Omit<React.ComponentPropsWithRef<typeof Icon>, "size" | "withText">
> = ({ className, ...props }) => {
    return (
        <Icon
            className={clsx(styles["icon"], className)}
            size={20}
            {...props}
        />
    );
};
