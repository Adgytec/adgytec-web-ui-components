import clsx from "clsx";
import { composeRenderProps, Group } from "react-aria-components";
import { addStateAttrsToFieldButton } from "../core";
import styles from "./field.module.css";
import type { FieldProps } from "./types";

export const Field: React.FC<FieldProps> = ({
    variant = "filled",
    leading,
    trailing,
    ...props
}) => {
    return (
        <Group
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["field"], styles[variant], className)
            )}
            data-leading={leading ? true : undefined}
            data-trailing={trailing ? true : undefined}
            data-variant={variant}
        >
            {composeRenderProps(
                props.children,
                (children, { isDisabled, isInvalid }) => {
                    return (
                        <>
                            {leading &&
                                addStateAttrsToFieldButton({
                                    node: leading,
                                    isDisabled,
                                    isInvalid,
                                })}

                            {children}

                            {trailing &&
                                addStateAttrsToFieldButton({
                                    node: trailing,
                                    isDisabled,
                                    isInvalid,
                                })}
                        </>
                    );
                }
            )}
        </Group>
    );
};
