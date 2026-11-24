import clsx from "clsx";
import { CalendarDays } from "lucide-react";
import {
    DatePicker as AriaDatePicker,
    composeRenderProps,
    DateInput,
    DateSegment,
    type DateValue,
    Group,
} from "react-aria-components";
import { Calendar } from "@/components/Calendar";
import { Popover } from "@/components/Popover";
import { typography } from "@/utils";
import {
    Colors,
    DateInputStyles,
    DateSegmentStyles,
    EditorInputStyles,
    EditorStyles,
    InputGroupStyles,
    SupportingTextStyles,
    UnsetStyles,
} from "../../core";
import { Description, FieldButton, FieldError, Label } from "../../Field";
import { DatePickerGroupStyles, DatePickerPopoverStyles } from "../core";
import type { DatePickerProps } from "./types";

/**
 * A date picker component combining a segmented date input field with a dropdown {@link Calendar} popover.
 *
 * Implements Material Design 3 Date Picker guidelines, providing both typed manual input and interactive
 * calendar date selection, with locale-sensitive formatting and validation.
 *
 * @example
 * ```tsx
 * import { DatePicker } from '@adgytec/web-ui-components';
 *
 * <DatePicker
 *     label="Appointment Date"
 *     description="Choose a date for your visit."
 * />
 * ```
 */
export const DatePicker = <T extends DateValue>({
    label,
    description,
    errorMessage,
    showDescriptionOnInvalid = false,
    ref,
    weekdayStyle,
    variant = "filled",
    ...props
}: DatePickerProps<T>) => {
    return (
        <AriaDatePicker
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(Colors, InputGroupStyles, className)
            )}
        >
            {({ isInvalid, isDisabled, isOpen }) => {
                const showDescription =
                    description &&
                    (!isInvalid || (isInvalid && showDescriptionOnInvalid));

                return (
                    <>
                        {label && <Label>{label}</Label>}

                        <Group
                            className={clsx(
                                EditorStyles,
                                DatePickerGroupStyles
                            )}
                            data-trailing={true}
                            data-open={isOpen || undefined}
                            data-date-input={true}
                            data-variant={variant}
                        >
                            <DateInput
                                ref={ref}
                                className={clsx(
                                    UnsetStyles,
                                    EditorInputStyles,
                                    typography.bodyLarge,
                                    DateInputStyles
                                )}
                                data-date-input={true}
                            >
                                {(segment) => (
                                    <DateSegment
                                        className={clsx(
                                            DateSegmentStyles,
                                            typography.bodyLarge
                                        )}
                                        segment={segment}
                                    />
                                )}
                            </DateInput>

                            <FieldButton
                                icon={CalendarDays}
                                isDisabled={isDisabled}
                                data-invalid={isInvalid || undefined}
                            />
                        </Group>

                        {showDescription && (
                            <Description className={clsx(SupportingTextStyles)}>
                                {description}
                            </Description>
                        )}
                        <FieldError className={clsx(SupportingTextStyles)}>
                            {errorMessage}
                        </FieldError>

                        <Popover className={clsx(DatePickerPopoverStyles)}>
                            <Calendar weekdayStyle={weekdayStyle} />
                        </Popover>
                    </>
                );
            }}
        </AriaDatePicker>
    );
};
