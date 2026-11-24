import { CalendarDays } from "lucide-react";
import type { DateValue } from "react-aria";
import {
    DateRangePicker as AriaDateRangePicker,
    composeRenderProps,
} from "react-aria-components";
import { DateInput, DateSegment, Field, FieldButton } from "../../Field";
import { FieldGroup } from "../../Field/FieldGroup/FieldGroup";
import type { DateRangePickerProps } from "./types";

export const DateRangePicker = <T extends DateValue>({
    label,
    errorMessage,
    description,

    variant,
    trailing,

    dateInputRef,
    ...props
}: DateRangePickerProps<T>) => {
    return (
        <AriaDateRangePicker {...props}>
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
                            <DateInput slot="start" ref={dateInputRef}>
                                {(segment) => <DateSegment segment={segment} />}
                            </DateInput>

                            <span aria-hidden={true}>-</span>

                            <DateInput slot="end" ref={dateInputRef}>
                                {(segment) => <DateSegment segment={segment} />}
                            </DateInput>
                        </Field>

                        {children}
                    </FieldGroup>
                )
            )}
        </AriaDateRangePicker>
    );
};
