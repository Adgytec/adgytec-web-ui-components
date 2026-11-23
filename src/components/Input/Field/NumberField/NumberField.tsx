import clsx from "clsx";
import { NumberField as AriaNumberField, Input } from "react-aria-components";
import { Field, UnsetFieldStyles } from "../Field";
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
    ...props
}) => {
    return (
        <AriaNumberField {...props}>
            <FieldGroup
                label={label}
                description={description}
                errorMessage={errorMessage}
                hasLeading={leading ? true : undefined}
                hasTrailing={trailing ? true : undefined}
            >
                <Field leading={leading} trailing={trailing} variant={variant}>
                    <Input className={clsx(UnsetFieldStyles)} />
                </Field>
            </FieldGroup>
        </AriaNumberField>
    );
};
