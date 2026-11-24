import { CalendarDays } from "lucide-react";
import type { DateValue } from "react-aria";
import {
    DateRangePicker as AriaDateRangePicker,
    composeRenderProps,
} from "react-aria-components";
import {
    DateInput,
    DateSegment,
    Field,
    FieldButton,
    FieldGroup,
} from "../../Field";
import type { DateRangePickerProps } from "./types";

/**
 * A date range picker component combining keyboard date range inputs with a calendar dialog popover.
 *
 * Displays start and end date inputs separated by a dash within a Material Design 3 text field container.
 * Supports filled and outlined variants, keyboard segment navigation, and visual calendar range selection.
 *
 * @example
 * ```tsx
 * import { DateRangePicker, DatePickerPopover } from "@adgytec/web-ui-components";
 * import { RangeCalendar } from "@/components/Calendar";
 *
 * <DateRangePicker label="Trip Dates" description="Select check-in and check-out dates">
 *     <DatePickerPopover>
 *         <RangeCalendar />
 *     </DatePickerPopover>
 * </DateRangePicker>
 * ```
 */
export const DateRangePicker = <T extends DateValue>({
    label,
    errorMessage,
    description,

    variant,
    trailing,

    startDateInputRef,
    endDateInputRef,
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
                            isInvalid={isInvalid}
                            isDisabled={isDisabled}
                        >
                            <DateInput slot="start" ref={startDateInputRef}>
                                {(segment) => <DateSegment segment={segment} />}
                            </DateInput>

                            <span aria-hidden={true}>-</span>

                            <DateInput slot="end" ref={endDateInputRef}>
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
