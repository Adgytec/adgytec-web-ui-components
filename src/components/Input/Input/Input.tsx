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
import { CharacterCount } from "../CharacterCount";
import {
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
    showDescriptionOnInvalid = false,
    placeholder,
    editorDir,
    prefix,
    suffix,
    leadingIcon,
    trailing,
    className,
    showCharacterCount: hasCharacterCount,
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

                const hasDescription =
                    description &&
                    (!isInvalid || (isInvalid && showDescriptionOnInvalid));

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

                        {hasDescription && (
                            <span
                                {...layoutDataAttrs}
                                className={clsx(SupportingTextStyles)}
                            >
                                <Description>{description}</Description>

                                {hasCharacterCount && (
                                    <CharacterCount
                                        count={currentValue.length}
                                        maxLength={maxLength}
                                    />
                                )}
                            </span>
                        )}

                        {!hasDescription && hasCharacterCount && (
                            <span
                                {...layoutDataAttrs}
                                className={clsx(SupportingTextStyles)}
                            >
                                <FieldError>{errorMessage}</FieldError>

                                <CharacterCount
                                    count={currentValue.length}
                                    maxLength={maxLength}
                                />
                            </span>
                        )}

                        {/* Error placement */}
                        {hasDescription || !hasCharacterCount ? (
                            <FieldError>{errorMessage}</FieldError>
                        ) : null}
                    </>
                );
            }}
        </AriaTextField>
    );
};
