import clsx from "clsx";
import {
    ComboBox as AriaComboBox,
    ComboBoxValue,
    TagGroup,
    TagList,
} from "react-aria-components";
import { Tag } from "@/components/Tag";
import { typography } from "@/utils";
import { Colors, InputGroupStyles, SupportingTextStyles } from "../../core";
import { Description } from "../../Description";
import { FieldError } from "../../FieldError";
import { Label } from "../../Label";
import styles from "./comboBox.module.css";
import { ComboboxContext } from "./context";
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
                    <ComboboxContext value={renderProps}>
                        {label && <Label>{label}</Label>}

                        {typeof children === "function"
                            ? children(renderProps)
                            : children}

                        {props.selectionMode === "multiple" &&
                            !hideMultiSelectionValue && (
                                <ComboBoxValue<T>
                                    className={clsx(
                                        styles["selected-value"],
                                        typography.bodyLarge
                                    )}
                                >
                                    {({ state }) => {
                                        return (
                                            <TagGroup
                                                aria-label="Selected Items"
                                                onRemove={(keys) => {
                                                    if (
                                                        Array.isArray(
                                                            state.value
                                                        )
                                                    ) {
                                                        state.setValue(
                                                            state.value.filter(
                                                                (k) =>
                                                                    !keys.has(k)
                                                            )
                                                        );
                                                    }
                                                }}
                                            >
                                                <TagList
                                                    items={state.selectedItems}
                                                    className={clsx(
                                                        styles["tag-list"]
                                                    )}
                                                >
                                                    {(item) => (
                                                        <Tag
                                                            id={item.key}
                                                            label={
                                                                item.textValue
                                                            }
                                                        />
                                                    )}
                                                </TagList>
                                            </TagGroup>
                                        );
                                    }}
                                </ComboBoxValue>
                            )}

                        {showDescription && (
                            <Description className={clsx(SupportingTextStyles)}>
                                {description}
                            </Description>
                        )}

                        <FieldError className={clsx(SupportingTextStyles)}>
                            {errorMessage}
                        </FieldError>
                    </ComboboxContext>
                );
            }}
        </AriaComboBox>
    );
};
