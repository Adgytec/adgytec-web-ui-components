import { clsx } from "clsx";
import { Icon } from "@/components/Icon";
import { CardIconSize } from "../Card/types";
import styles from "./cardIcon.module.css";

export const CardIcon: React.FC<
    Omit<React.ComponentPropsWithRef<typeof Icon>, "size" | "withText">
> = ({ icon, ...props }) => {
    return (
        <Icon
            icon={icon}
            size={CardIconSize}
            className={clsx(styles["icon"])}
            {...props}
        />
    );
};
