import clsx from "clsx";
import { CalendarDays } from "lucide-react";
import {
    DatePicker as AriaDatePicker,
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
import { Description } from "../../Description";
import { FieldError } from "../../FieldError";
import { InputButton } from "../../Input";
import { Label } from "../../Label";
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
    className,
    ref,
    weekdayStyle,
    ...props
}: DatePickerProps<T>) => {
    return (
        <AriaDatePicker
            className={(renderProps) =>
                clsx(
                    Colors,
                    InputGroupStyles,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
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

                            <InputButton
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
