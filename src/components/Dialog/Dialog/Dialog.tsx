import clsx from "clsx";
import { Dialog as AriaDialog, type DialogProps } from "react-aria-components";
import styles from "./dialog.module.css";

export const Dialog: React.FC<DialogProps> = ({ className, ...props }) => {
    return (
        <AriaDialog className={clsx(styles["dialog"], className)} {...props} />
    );
};
