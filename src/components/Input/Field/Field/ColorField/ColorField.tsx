import { clsx } from "clsx";
import { useObjectRef } from "react-aria";
import { ColorField as AriaColorField, Input } from "react-aria-components";
import {
    FieldEditorColorStyles,
    FieldTypography,
    focusOnPointerDown,
    UnsetFieldStyles,
} from "../core";
import { Field } from "../Field";
import { FieldGroup } from "../FieldGroup";
import type { ColorFieldProps } from "./types";

/**
 * A color text input field allowing users to enter and edit hex or channel color values with keyboard validation.
 *
 * Implements Material Design 3 Text Field specifications with support for filled and outlined variants,
 * labels, helper descriptions, error messages, and slots for leading/trailing `ColorSwatch` indicators,
 * custom buttons, or icons. Built on React Aria's `ColorField` for accessible color parsing and validation.
 *
 * @example
 * ```tsx
 * import { ColorField } from "@adgytec/web-ui-components";
 * import { ColorSwatch } from "react-aria-components";
 *
 * <ColorField
 *     label="Accent Color"
 *     description="Enter a hex color code"
 *     defaultValue="#6750a4"
 *     leading={
 *         <ColorSwatch
 *             style={{ width: 20, height: 20, borderRadius: 4 }}
 *         />
 *     }
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Outlined variant with validation
 * import { ColorField } from "@adgytec/web-ui-components";
 *
 * <ColorField
 *     variant="outlined"
 *     label="Brand Color"
 *     defaultValue="#386a20"
 *     isRequired
 * />
 * ```
 */
export const ColorField: React.FC<ColorFieldProps> = ({
    label,
    description,
    errorMessage,

    trailing,
    leading,
    variant,

    inputRef,
    placeholder,
    ...props
}) => {
    const ref = useObjectRef(inputRef);

    return (
        <AriaColorField {...props}>
            {({ isInvalid, isDisabled }) => (
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
        </AriaColorField>
    );
};
