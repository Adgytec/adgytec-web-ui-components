import clsx from "clsx";
import { ComboBox as AriaComboBox, ComboBoxValue } from "react-aria-components";
import { typography } from "@/utils";
import { Colors, InputGroupStyles, SupportingTextStyles } from "../../core";
import { Description } from "../../Description";
import { FieldError } from "../../FieldError";
import { Label } from "../../Label";
import styles from "./comboBox.module.css";
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
    hideMultiSelectionValue = false,
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

                        {props.selectionMode === "multiple" &&
                            !hideMultiSelectionValue && (
                                <ComboBoxValue
                                    className={clsx(
                                        styles["selected-value"],
                                        typography.bodyLarge
                                    )}
                                >
                                    {({
                                        selectedText,
                                        isPlaceholder,
                                        defaultChildren,
                                    }) =>
                                        isPlaceholder
                                            ? defaultChildren
                                            : selectedText
                                    }
                                </ComboBoxValue>
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
