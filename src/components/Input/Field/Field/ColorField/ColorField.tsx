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
