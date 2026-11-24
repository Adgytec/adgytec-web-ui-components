import clsx from "clsx";
import { composeRenderProps, Group } from "react-aria-components";
import { addStateAttrsToFieldButton } from "../core";
import { FieldStyle, FieldVariantStyles } from "./field";
import type { FieldProps } from "./types";

/**
 * Low-level field container component implementing Material Design 3 Text Field container styles.
 *
 * Provides the interactive surface (background, outline, hover/focus/disabled/invalid states)
 * and slots for `leading` and `trailing` elements, wrapping input controls in an accessible `Group`.
 */
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
                clsx(FieldStyle, FieldVariantStyles(variant), className)
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
