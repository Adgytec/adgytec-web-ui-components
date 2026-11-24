import type { DateValue } from "react-aria";
import { DateField as AriaDateField } from "react-aria-components";
import { DateInput, DateSegment, Field } from "../Field";
import { FieldGroup } from "../Field/FieldGroup/FieldGroup";
import type { DateFieldProps } from "./types";

export const DateField = <T extends DateValue>({
    label,
    errorMessage,
    description,

    leading,
    trailing,
    variant,

    dateInputRef,
    ...props
}: DateFieldProps<T>) => {
    return (
        <AriaDateField {...props}>
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
                    >
                        <DateInput ref={dateInputRef}>
                            {(segment) => <DateSegment segment={segment} />}
                        </DateInput>
                    </Field>
                </FieldGroup>
            )}
        </AriaDateField>
    );
};
