import type { TimeValue } from "react-aria";
import { TimeField as AriaTimeField } from "react-aria-components";
import { DateInput, DateSegment, Field } from "../Field";
import { FieldGroup } from "../Field/FieldGroup/FieldGroup";
import type { TimeFieldProps } from "./types";

export const TimeField = <T extends TimeValue>({
    label,
    errorMessage,
    description,

    leading,
    trailing,
    variant,

    dateInputRef,
    ...props
}: TimeFieldProps<T>) => {
    return (
        <AriaTimeField {...props}>
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
        </AriaTimeField>
    );
};
