import clsx from "clsx";
import { useObjectRef } from "react-aria";
import {
    NumberField as AriaNumberField,
    composeRenderProps,
    Input,
} from "react-aria-components";
import {
    Field,
    FieldAutoSizeStyles,
    FieldEditorColorStyles,
    FieldTypography,
    focusOnPointerDown,
    UnsetFieldStyles,
} from "../Field";
import { FieldGroup } from "../Field/FieldGroup/FieldGroup";
import type { NumberFieldProps } from "./types";

/**
 * A numeric input field allowing users to enter, increment, and decrement numerical values.
 *
 * Implements Material Design 3 Text Field specifications with support for filled and outlined variants,
 * internationalized formatting, min/max limits, step values, and leading/trailing custom buttons.
 * Built on React Aria's `NumberField` for full accessibility and keyboard increment/decrement interactions.
 *
 * @example
 * ```tsx
 * import { NumberField } from "@adgytec/web-ui-components";
 *
 * <NumberField
 *     label="Quantity"
 *     description="Enter quantity between 1 and 100"
 *     defaultValue={1}
 *     minValue={1}
 *     maxValue={100}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Outlined variant with currency formatting
 * import { NumberField } from "@adgytec/web-ui-components";
 *
 * <NumberField
 *     variant="outlined"
 *     label="Price"
 *     formatOptions={{
 *         style: "currency",
 *         currency: "USD",
 *     }}
 * />
 * ```
 */
export const NumberField: React.FC<NumberFieldProps> = ({
    label,
    description,
    errorMessage,

    variant,
    leading,
    trailing,

    inputRef,
    placeholder,
    editorDir,

    ...props
}) => {
    const ref = useObjectRef(inputRef);

    return (
        <AriaNumberField
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(FieldAutoSizeStyles, className)
            )}
        >
            {({ isDisabled, isInvalid }) => (
                <FieldGroup
                    label={label}
                    description={description}
                    errorMessage={errorMessage}
                    hasLeading={leading ? true : undefined}
                    hasTrailing={trailing ? true : undefined}
                    isInvalid={isInvalid}
                    isDisabled={isDisabled}
                >
                    <Field
                        leading={leading}
                        trailing={trailing}
                        variant={variant}
                        onPointerDown={focusOnPointerDown(ref)}
                        isInvalid={isInvalid}
                        isDisabled={isDisabled}
                    >
                        <Input
                            dir={editorDir}
                            placeholder={placeholder}
                            className={clsx(
                                UnsetFieldStyles,
                                FieldEditorColorStyles,
                                FieldTypography
                            )}
                            ref={ref}
                        />
                    </Field>
                </FieldGroup>
            )}
        </AriaNumberField>
    );
};
