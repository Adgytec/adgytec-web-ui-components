import clsx from "clsx";
import { Dialog as AriaDialog } from "react-aria-components";
import styles from "./dialog.module.css";

export const Dialog: React.FC<
    React.ComponentPropsWithRef<typeof AriaDialog>
> = ({ className, ...props }) => {
    return (
        <AriaDialog className={clsx(styles["dialog"], className)} {...props} />
    );
};
