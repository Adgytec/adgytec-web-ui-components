import { CalendarDays } from "lucide-react";
import type { DateValue } from "react-aria";
import {
    DatePicker as AriaDatePicker,
    composeRenderProps,
} from "react-aria-components";
import { DateInput, DateSegment, Field, FieldButton } from "../../Field";
import { FieldGroup } from "../../Field/FieldGroup/FieldGroup";
import type { DatePickerProps } from "./types";

/**
 * A date picker component combining keyboard date input with a calendar dialog popover.
 *
 * Implements Material Design 3 Text Field styling for the date input and supports filled and outlined variants.
 * Clicking the trailing calendar button opens the calendar overlay for visual date selection.
 *
 * @example
 * ```tsx
 * import { DatePicker, DatePickerPopover } from "@adgytec/web-ui-components";
 * import { Calendar } from "@/components/Calendar";
 *
 * <DatePicker label="Event Date" description="Select the date of your event">
 *     <DatePickerPopover>
 *         <Calendar />
 *     </DatePickerPopover>
 * </DatePicker>
 * ```
 */
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
                            isInvalid={isInvalid}
                            isDisabled={isDisabled}
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
