import clsx from "clsx";
import {
    DateField as AriaDateField,
    composeRenderProps,
    DateInput,
    DateSegment,
    type DateValue,
} from "react-aria-components";
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
} from "../core";
import { Description, FieldError, Label } from "../Field";
import type { DateFieldProps } from "./types";

/**
 * An accessible segmented date input field allowing users to enter dates by editing day, month, and year segments.
 *
 * Automatically handles locale-specific date formatting, keyboard increment/decrement,
 * validation constraints, helper descriptions, and error feedback.
 *
 * @example
 * ```tsx
 * import { DateField } from '@adgytec/web-ui-components';
 *
 * <DateField
 *     label="Birth date"
 *     description="Enter in your local date format."
 * />
 * ```
 */
export const DateField = <T extends DateValue>({
    label,
    description,
    errorMessage,
    showDescriptionOnInvalid = false,
    ref,
    variant = "filled",
    ...props
}: DateFieldProps<T>) => {
    return (
        <AriaDateField
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(Colors, InputGroupStyles, className)
            )}
        >
            {({ isInvalid }) => {
                const showDescription =
                    description &&
                    (!isInvalid || (isInvalid && showDescriptionOnInvalid));

                return (
                    <>
                        {label && <Label>{label}</Label>}

                        <DateInput
                            ref={ref}
                            className={clsx(
                                UnsetStyles,
                                EditorStyles,
                                EditorInputStyles,
                                typography.bodyLarge,
                                DateInputStyles
                            )}
                            data-date-input={true}
                            data-variant={variant}
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

                        {showDescription && (
                            <Description className={clsx(SupportingTextStyles)}>
                                {description}
                            </Description>
                        )}
                        <FieldError className={clsx(SupportingTextStyles)}>
                            {errorMessage}
                        </FieldError>
                    </>
                );
            }}
        </AriaDateField>
    );
};
