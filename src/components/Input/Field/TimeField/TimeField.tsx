import type { TimeValue } from "react-aria";
import { TimeField as AriaTimeField } from "react-aria-components";
import { DateInput, DateSegment, Field, FieldGroup } from "../Field";
import type { TimeFieldProps } from "./types";

/**
 * An accessible time input field allowing users to enter and edit time values using keyboard navigation.
 *
 * Implements Material Design 3 Text Field container styling with segment-based time editing (hours,
 * minutes, seconds, day period), internationalized formatting, and filled/outlined variants.
 *
 * @example
 * ```tsx
 * import { TimeField } from "@adgytec/web-ui-components";
 * import { Time } from "@internationalized/date";
 *
 * <TimeField
 *     label="Appointment Time"
 *     description="Select preferred consultation time"
 *     defaultValue={new Time(9, 30)}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Outlined variant
 * import { TimeField } from "@adgytec/web-ui-components";
 *
 * <TimeField
 *     variant="outlined"
 *     label="Meeting Time"
 *     isRequired
 * />
 * ```
 */
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
                        isInvalid={isInvalid}
                        isDisabled={isDisabled}
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
