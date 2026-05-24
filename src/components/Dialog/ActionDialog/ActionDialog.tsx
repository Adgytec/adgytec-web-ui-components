import clsx from "clsx";
import { Heading } from "react-aria-components";
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
    divider = "none",
    ...props
}) => {
    const headingDivider = divider === "all" || divider === "after-heading";
    const actionDivider = divider === "all" || divider === "before-actions";
    const hasActions = Array.isArray(actions) ? actions.length > 0 : !!actions;

    return (
        <Dialog
            className={clsx(styles["action-dialog"])}
            {...props}
            data-dialog-head={!!heading || !!icon || undefined}
            data-actions={hasActions || undefined}
        >
            {(renderProps) => (
                <>
                    {(heading || icon) && (
                        <div
                            className={clsx(styles["heading-container"])}
                            data-icon={!!icon || undefined}
                            data-divider={headingDivider || undefined}
                        >
                            {icon && <Icon icon={icon} size={DialogIconSize} />}

                            {heading && (
                                <Heading
                                    slot="title"
                                    className={clsx(
                                        DialogHeadlineTypography,
                                        styles["heading"]
                                    )}
                                >
                                    {heading}
                                </Heading>
                            )}
                        </div>
                    )}

                    <div className={clsx(DialogBodyTypography, styles["body"])}>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                    </div>

                    {hasActions && (
                        <div
                            className={clsx(styles["action-container"])}
                            data-divider={actionDivider || undefined}
                        >
                            <div className={clsx(styles["actions"])}>
                                {typeof actions === "function"
                                    ? actions(renderProps)
                                    : actions}
                            </div>
                        </div>
                    )}
                </>
            )}
        </Dialog>
    );
};
