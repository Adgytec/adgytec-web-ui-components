import clsx from "clsx";
import { Icon, type IconProps } from "@/components/Icon";
import styles from "./fieldIcon.module.css";

export const FieldIcon: React.FC<Omit<IconProps, "size" | "withText">> = (
    props
) => {
    return (
        <span className={clsx(styles["icon-group"])}>
            <Icon {...props} size={24} />
        </span>
    );
};
