import clsx from "clsx";
import { useRef } from "react";
import { useFocusRing } from "react-aria/useFocusRing";
import { useHover } from "react-aria/useHover";
import { usePress } from "react-aria/usePress";
import {
    Input as AriaInput,
    TextField as AriaTextField,
} from "react-aria-components";
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

    return (
        <AriaTextField
            className={(renderProps) =>
                clsx(
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
        >
            {({ isDisabled, isInvalid }) => {
                const dataAttrs = {
                    "data-hovered": isHovered || undefined,
                    "data-disabled": isDisabled || undefined,
                    "data-focused": isFocused || undefined,
                    "data-focus-visible": isFocusVisible || undefined,
                    "data-invalid": isInvalid || undefined,
                    "data-trailing": trailing ? true : undefined,
                };

                return (
                    <>
                        {label && <Label>{label}</Label>}

                        <div {...pressProps} {...hoverProps} {...dataAttrs}>
                            <div>
                                {prefix && prefix}
                                <AriaInput
                                    ref={inputRef}
                                    {...focusProps}
                                    placeholder={placeholder}
                                    dir={editorDir}
                                />
                                {suffix && suffix}
                            </div>

                            {trailing && trailing}
                        </div>

                        {(showCharacterCount || description) && (
                            <div
                                data-description={
                                    description ? true : undefined
                                }
                            >
                                {description && (
                                    <Description>{description}</Description>
                                )}

                                {showCharacterCount && (
                                    <span>
                                        {currentValue.length}
                                        {maxLength && `/${maxLength}`}
                                    </span>
                                )}
                            </div>
                        )}
                        <FieldError>{errorMessage}</FieldError>
                    </>
                );
            }}
        </AriaTextField>
    );
};
