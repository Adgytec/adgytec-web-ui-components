import { clsx } from "clsx";
import { Separator as AriaSeparator } from "react-aria-components";
import styles from "./separator.module.css";

export const Separator: React.FC<
    React.ComponentPropsWithRef<typeof AriaSeparator>
> = ({ className, ...props }) => {
    return (
        <AriaSeparator
            className={clsx(styles["separator"], className)}
            {...props}
        />
    );
};
