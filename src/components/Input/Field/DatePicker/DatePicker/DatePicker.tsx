import { CalendarDays } from "lucide-react";
import type { DateValue } from "react-aria";
import {
    DatePicker as AriaDatePicker,
    composeRenderProps,
} from "react-aria-components";
import { DateInput, DateSegment, Field, FieldButton } from "../../Field";
import { FieldGroup } from "../../Field/FieldGroup/FieldGroup";
import type { DatePickerProps } from "./types";

export const DatePicker = <T extends DateValue>({
    label,
    errorMessage,
    description,

    variant,
    trailing,

    dateInputRef,
    ...props
}: DatePickerProps<T>) => {
    return (
        <AriaDatePicker {...props}>
            {composeRenderProps(
                props.children,
                (children, { isInvalid, isDisabled }) => (
                    <FieldGroup
                        label={label}
                        description={description}
                        errorMessage={errorMessage}
                        hasTrailing={true}
                        isInvalid={isInvalid}
                        isDisabled={isDisabled}
                    >
                        <Field
                            variant={variant}
                            trailing={
                                trailing || <FieldButton icon={CalendarDays} />
                            }
                        >
                            <DateInput ref={dateInputRef}>
                                {(segment) => <DateSegment segment={segment} />}
                            </DateInput>
                        </Field>

                        {children}
                    </FieldGroup>
                )
            )}
        </AriaDatePicker>
    );
};
