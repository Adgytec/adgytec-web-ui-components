import clsx from "clsx";
import { useObjectRef } from "react-aria";
import { NumberField as AriaNumberField, Input } from "react-aria-components";
import { BaseFieldStyles, Field, focusOnPointerDown } from "../Field";
import { FieldGroup } from "../Field/FieldGroup/FieldGroup";
import type { NumberFieldProps } from "./types";

export const NumberField: React.FC<NumberFieldProps> = ({
    placeholder,
    label,
    description,
    errorMessage,
    variant,
    leading,
    trailing,
    inputRef,
    ...props
}) => {
    const ref = useObjectRef(inputRef);

    return (
        <AriaNumberField {...props}>
            <FieldGroup
                label={label}
                description={description}
                errorMessage={errorMessage}
                hasLeading={leading ? true : undefined}
                hasTrailing={trailing ? true : undefined}
            >
                <Field
                    leading={leading}
                    trailing={trailing}
                    variant={variant}
                    onPointerDown={focusOnPointerDown(ref)}
                >
                    <Input className={clsx(BaseFieldStyles)} ref={ref} />
                </Field>
            </FieldGroup>
        </AriaNumberField>
    );
};
