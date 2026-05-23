import { clsx } from "clsx";
import { Separator } from "react-aria-components";
import styles from "./divider.module.css";

export const Divider: React.FC<
    React.ComponentPropsWithRef<typeof Separator>
> = ({ className, ...props }) => {
    return (
        <Separator
            className={clsx(styles["divider"], className)}
            {...props}
            data-divider
        />
    );
};
