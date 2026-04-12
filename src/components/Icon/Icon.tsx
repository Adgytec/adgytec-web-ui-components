// icons with typography ref
// https://m3.material.io/styles/icons/applying-icons#f9db4adc-ca78-473f-85eb-a351b73c39ac

import clsx from "clsx";
import styles from "./icon.module.css";
import type { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({
    size,
    withText,
    icon: Icon,
    className,
    ...props
}) => {
    if (process.env.NODE_ENV !== "production") {
        if (withText && typeof size !== "undefined") {
            console.warn("Icon: 'size' is ignored when 'withText' is true.");
        }
    }

    const sizeInNum = typeof size === "number";

    const shouldAddSizeClasses = !withText && !sizeInNum;
    const shouldAddSizeProp = !withText && sizeInNum;
    return (
        <Icon
            className={clsx(
                withText && styles["with-text"],
                {
                    [styles["icon"]]: shouldAddSizeClasses,
                    [styles[size ?? "standard"]]: shouldAddSizeClasses,
                },
                className
            )}
            size={shouldAddSizeProp ? size : undefined}
            {...props}
        />
    );
};
