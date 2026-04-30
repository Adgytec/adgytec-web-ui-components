import type { ActionDialogProps } from "./types";
import styles from "./actionDialog.module.css";
import { Dialog } from "../Dialog";
import clsx from "clsx";

export const ActionDialog: React.FC<ActionDialogProps> = ({
    heading,
    icon,
    actions,
    divider = "none",
    children,
    ...props
}) => {
    return (
        <Dialog className={clsx(styles["action-dialog"])} {...props}></Dialog>
    );
};
