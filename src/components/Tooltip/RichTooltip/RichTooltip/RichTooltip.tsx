// https://m3.material.io/components/tooltips/guidelines#00e87770-86d0-436d-b50b-436ff3cefe75
// use this with popover, for more details read the article

import clsx from "clsx";
import styles from "./richTooltip.module.css";

export const RichTooltip: React.FC<React.ComponentPropsWithRef<"div">> = ({
    className,
    ...props
}) => {
    return (
        <div
            className={clsx(styles["tooltip"], className)}
            {...props}
            data-rich-tooltip
        />
    );
};
