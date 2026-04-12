// material symbols with typography ref
// https://m3.material.io/styles/icons/applying-icons#f9db4adc-ca78-473f-85eb-a351b73c39ac

import clsx from "clsx";
import styles from "./icon.module.css";
import type { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({
    size,
    weight,
    fill,
    withText,
    icon,
}) => {
    if (process.env.NODE_ENV !== "production") {
        if (withText && (size || weight)) {
            console.warn(
                "Icon: 'size' and 'weight' are ignored when 'withText' is true."
            );
        }
    }

    return (
        <span
            className={clsx(
                "material-symbols-outlined",
                withText ? styles["with-text"] : styles["icon"],
                size && styles[size],
                fill && styles["fill"],
                weight && styles[`weight-${weight}`]
            )}
        >
            {icon}
        </span>
    );
};
