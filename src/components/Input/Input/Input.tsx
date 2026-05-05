import clsx from "clsx";
import { useRef } from "react";
import { useFocusRing } from "react-aria/useFocusRing";
import { useHover } from "react-aria/useHover";
import { usePress } from "react-aria/usePress";
import {
    Input as AriaInput,
    TextField as AriaTextField,
} from "react-aria-components";
import { Icon } from "@/components/Icon";
import { typography } from "@/utils";
import {
    CharacterCountStyles,
    Colors,
    EditorInputGroupStyles,
    EditorInputStyles,
    EditorStyles,
    InputGroupStyles,
    SupportingTextStyles,
    TextFieldIconSize,
    UnsetStyles,
} from "../core";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { useControllableState } from "../hooks";
import { Label } from "../Label";
import type { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
    label,
    description,
    errorMessage,
    placeholder,
    editorDir,
    prefix,
    suffix,
    leadingIcon,
    trailing,
    className,
    showCharacterCount,
    maxLength,
    value,
    defaultValue,
    onChange,
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { currentValue, setValue } = useControllableState({
        value,
        defaultValue,
        onChange,
    });

    const { isFocused, isFocusVisible, focusProps } = useFocusRing();
    const { isHovered, hoverProps } = useHover({});
    const { pressProps } = usePress({
        onPress: () => {
            inputRef.current?.focus();
        },
    });

    const layoutDataAttrs = {
        "data-trailing": trailing ? true : undefined,
        "data-leading": leadingIcon ? true : undefined,
    };

    return (
        <AriaTextField
            className={(renderProps) =>
                clsx(
                    Colors,
                    InputGroupStyles,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            maxLength={maxLength}
            value={value}
            defaultValue={defaultValue}
            onChange={setValue}
            {...props}
            {...layoutDataAttrs}
        >
            {({ isDisabled, isInvalid }) => {
                const dataAttrs = {
                    ...layoutDataAttrs,
                    "data-hovered": isHovered || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-invalid": isInvalid || undefined,
                };

                return (
                    <>
                        {label && <Label>{label}</Label>}

                        <span
                            {...pressProps}
                            {...hoverProps}
                            {...dataAttrs}
                            className={clsx(EditorStyles)}
                            data-input={true}
                        >
                            {leadingIcon && (
                                <Icon
                                    icon={leadingIcon}
                                    size={TextFieldIconSize}
                                />
                            )}
                            <span className={clsx(EditorInputGroupStyles)}>
                                {prefix && typeof prefix === "function"
                                    ? prefix(isDisabled, isInvalid)
                                    : prefix}
                                <AriaInput
                                    className={clsx(
                                        UnsetStyles,
                                        EditorInputStyles,
                                        typography.bodyLarge
                                    )}
                                    ref={inputRef}
                                    {...focusProps}
                                    placeholder={placeholder}
                                    dir={editorDir}
                                    data-input={true}
                                />
                                {suffix && typeof suffix === "function"
                                    ? suffix(isDisabled, isInvalid)
                                    : suffix}
                            </span>

                            {trailing && typeof trailing === "function"
                                ? trailing(isDisabled, isInvalid)
                                : trailing}
                        </span>

                        {(showCharacterCount || description) && (
                            <span
                                {...layoutDataAttrs}
                                className={clsx(SupportingTextStyles)}
                            >
                                {description && (
                                    <Description>{description}</Description>
                                )}

                                {showCharacterCount && (
                                    <span
                                        className={clsx(
                                            CharacterCountStyles,
                                            typography.labelMedium
                                        )}
                                    >
                                        {currentValue.length}
                                        {maxLength && `/${maxLength}`}
                                    </span>
                                )}
                            </span>
                        )}
                        <FieldError>{errorMessage}</FieldError>
                    </>
                );
            }}
        </AriaTextField>
    );
};
