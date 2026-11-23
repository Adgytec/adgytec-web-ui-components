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
import { Description, FieldError, Label } from "../Field";
import { InputButton } from "../Input";
import type { NumberFieldProps } from "./types";

/**
 * A number input field allowing users to enter, increment, and decrement numerical values.
 *
 * Implements Material Design 3 Text Field guidelines and wraps React Aria Components' {@link AriaNumberField}.
 * Supports keyboard entry, arrow key stepping, scroll wheel adjustment, min/max limits, step intervals,
 * internationalized number formatting (currency, percentages, decimals), stepper buttons,
 * helper descriptions, validation error messages, and filled/outlined visual variants.
 *
 * @example
 * ```tsx
 * import { NumberField } from '@adgytec/web-ui-components';
 *
 * // Basic number field with label and limits
 * <NumberField
 *     label="Quantity"
 *     defaultValue={1}
 *     minValue={1}
 *     maxValue={100}
 * />
 *
 * // Currency formatting
 * <NumberField
 *     label="Amount"
 *     defaultValue={49.99}
 *     formatOptions={{
 *         style: "currency",
 *         currency: "USD",
 *     }}
 * />
 *
 * // Outlined variant without stepper buttons
 * <NumberField
 *     variant="outlined"
 *     label="Age"
 *     showButton="none"
 *     minValue={0}
 * />
 * ```
 */
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
