import clsx from "clsx";
import { Dialog as AriaDialog } from "react-aria-components";
import { DialogContext } from "../core";
import styles from "./dialog.module.css";

export const Dialog: React.FC<
    React.ComponentPropsWithRef<typeof AriaDialog>
> = ({ className, ...props }) => {
    return (
        <DialogContext value={true}>
            <AriaDialog
                className={clsx(styles["dialog"], className)}
                {...props}
            />
        </DialogContext>
    );
};
