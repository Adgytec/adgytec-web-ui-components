import clsx from "clsx";
import { ComboBox as AriaComboBox, ComboBoxValue } from "react-aria-components";
import { Colors, InputGroupStyles, SupportingTextStyles } from "../../core";
import { Description } from "../../Description";
import { FieldError } from "../../FieldError";
import { Label } from "../../Label";
import type { ComboBoxProps } from "./types";

export const ComboBox = <
    T extends object,
    M extends "single" | "multiple" = "single",
>({
    label,
    description,
    errorMessage,
    showDescriptionOnInvalid = false,
    children,
    className,
    ...props
}: ComboBoxProps<T, M>) => {
    return (
        <AriaComboBox
            className={(renderProps) =>
                clsx(
                    Colors,
                    InputGroupStyles,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {(renderProps) => {
                const { isInvalid } = renderProps;
                const showDescription =
                    description &&
                    (!isInvalid || (isInvalid && showDescriptionOnInvalid));

                return (
                    <>
                        {label && <Label>{label}</Label>}

                        {typeof children === "function"
                            ? children(renderProps)
                            : children}

                        {props.selectionMode === "multiple" && (
                            <ComboBoxValue placeholder="No items selected" />
                        )}

                        {showDescription && (
                            <Description className={clsx(SupportingTextStyles)}>
                                {description}
                            </Description>
                        )}

                        <FieldError>{errorMessage}</FieldError>
                    </>
                );
            }}
        </AriaComboBox>
    );
};
