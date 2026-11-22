import clsx from "clsx";
import { Minus, Plus } from "lucide-react";
import { useFocusRing, useHover, useObjectRef } from "react-aria";
import {
    Input as AriaInput,
    NumberField as AriaNumberField,
    composeRenderProps,
} from "react-aria-components";
import { typography } from "@/utils";
import {
    Colors,
    EditorInputStyles,
    EditorStyles,
    InputGroupStyles,
    SupportingTextStyles,
    UnsetStyles,
} from "../core";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { InputButton } from "../Input";
import { Label } from "../Label";
import type { NumberFieldProps } from "./types";

export const NumberField: React.FC<NumberFieldProps> = ({
    label,
    description,
    errorMessage,
    showDescriptionOnInvalid = false,
    placeholder,
    ref,
    variant = "filled",
    showButton = "both",
    ...props
}) => {
    const inputRef = useObjectRef(ref);

    const { isFocused, isFocusVisible, focusProps } = useFocusRing();
    const { isHovered, hoverProps } = useHover({});

    const showIncrement = showButton === "both" || showButton === "increment";
    const showDecrement = showButton === "both" || showButton === "decrement";

    const layoutDataAttrs = {
        "data-trailing": showIncrement ? true : undefined,
        "data-leading": showDecrement ? true : undefined,
        "data-variant": variant,
    };

    return (
        <AriaNumberField
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(Colors, InputGroupStyles, className)
            )}
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

                const showDescription =
                    description &&
                    (!isInvalid || (isInvalid && showDescriptionOnInvalid));

                return (
                    <>
                        {label && <Label>{label}</Label>}

                        <span
                            onPointerDown={(e) => {
                                const target = e.target as HTMLElement;

                                if (
                                    inputRef.current?.contains(target) ||
                                    target.closest("button, a, [role='button']")
                                ) {
                                    return;
                                }

                                e.preventDefault();
                                inputRef.current?.focus();
                            }}
                            {...hoverProps}
                            {...dataAttrs}
                            className={clsx(EditorStyles)}
                            data-input={true}
                        >
                            {showDecrement && (
                                <InputButton
                                    icon={Minus}
                                    slot="decrement"
                                    isDisabled={isDisabled}
                                    data-invalid={isInvalid || undefined}
                                />
                            )}

                            <AriaInput
                                ref={inputRef}
                                className={clsx(
                                    UnsetStyles,
                                    EditorInputStyles,
                                    typography.bodyLarge
                                )}
                                {...focusProps}
                                placeholder={placeholder}
                                data-input={true}
                            />

                            {showIncrement && (
                                <InputButton
                                    icon={Plus}
                                    slot="increment"
                                    isDisabled={isDisabled}
                                    data-invalid={isInvalid || undefined}
                                />
                            )}
                        </span>

                        {showDescription && (
                            <Description className={clsx(SupportingTextStyles)}>
                                {description}
                            </Description>
                        )}

                        <FieldError className={clsx(SupportingTextStyles)}>
                            {errorMessage}
                        </FieldError>
                    </>
                );
            }}
        </AriaNumberField>
    );
};
