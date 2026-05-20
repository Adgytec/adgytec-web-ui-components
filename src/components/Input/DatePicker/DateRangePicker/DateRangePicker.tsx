import clsx from "clsx";
import { CalendarDays } from "lucide-react";
import {
    DateRangePicker as AriaRangeDatePicker,
    DateInput,
    DateSegment,
    type DateValue,
    Group,
} from "react-aria-components";
import { RangeCalendar } from "@/components/Calendar";
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
import {
    DatePickerGroupStyles,
    DatePickerPopoverStyles,
    DateRangePickerDateInputGroupStyles,
} from "../core";
import type { DateRangePickerProps } from "./types";

export const DateRangePicker = <T extends DateValue>({
    label,
    description,
    errorMessage,
    showDescriptionOnInvalid = false,
    className,
    ref,
    weekdayStyle,
    ...props
}: DateRangePickerProps<T>) => {
    return (
        <AriaRangeDatePicker
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
                            <div
                                className={clsx(
                                    DateRangePickerDateInputGroupStyles
                                )}
                            >
                                <DateInput
                                    slot="start"
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

                                <span aria-hidden="true">–</span>

                                <DateInput
                                    slot="end"
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
                            </div>

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
                            <RangeCalendar weekdayStyle={weekdayStyle} />
                        </Popover>
                    </>
                );
            }}
        </AriaRangeDatePicker>
    );
};
