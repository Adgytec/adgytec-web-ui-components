// icons with typography ref
// https://m3.material.io/styles/icons/applying-icons#f9db4adc-ca78-473f-85eb-a351b73c39ac

import clsx from "clsx";
import styles from "./icon.module.css";
import type { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({
    size = "standard",
    withText,
    icon: Icon,
    className,
    ...props
}) => {
    if (process.env.NODE_ENV !== "production") {
        if (withText && size) {
            console.warn("Icon: 'size' is ignored when 'withText' is true.");
        }
    }

    return (
        <Icon
            className={clsx(
                withText ? styles["with-text"] : styles["icon"],
                styles[size],
                className
            )}
            {...props}
        />
    );
};
