import { clsx } from "clsx";
import {
    Separator as AriaSeparator,
    type SeparatorProps,
} from "react-aria-components";
import styles from "./separator.module.css";

export const Separator: React.FC<SeparatorProps> = ({
    className,
    ...props
}) => {
    return (
        <AriaSeparator
            className={clsx(styles["separator"], className)}
            {...props}
        />
    );
};
