import clsx from "clsx";
import { Icon } from "@/components/Icon";
import {
    DialogBodyTypography,
    DialogHeadlineTypography,
    DialogIconSize,
} from "../core";
import { Dialog } from "../Dialog";
import styles from "./actionDialog.module.css";
import type { ActionDialogProps } from "./types";

export const ActionDialog: React.FC<ActionDialogProps> = ({
    heading,
    icon,
    actions,
    children,
    ...props
}) => {
    return (
        <Dialog className={clsx(styles["action-dialog"])} {...props}>
            {(renderProps) => (
                <>
                    {(heading || icon) && (
                        <div
                            className={clsx(styles["heading-container"])}
                            data-icon={icon ? true : undefined}
                        >
                            {icon && <Icon icon={icon} size={DialogIconSize} />}

                            {heading && (
                                <h2
                                    slot="title"
                                    className={clsx(
                                        DialogHeadlineTypography,
                                        styles["heading"]
                                    )}
                                >
                                    {heading}
                                </h2>
                            )}
                        </div>
                    )}

                    <div className={clsx(DialogBodyTypography, styles["body"])}>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                    </div>

                    {actions && actions.length > 0 && (
                        <div className={clsx(styles["action-container"])}>
                            <div className={clsx(styles["actions"])}>
                                {actions}
                            </div>
                        </div>
                    )}
                </>
            )}
        </Dialog>
    );
};
