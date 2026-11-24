import type { DateValue } from "react-aria";
import { DateField as AriaDateField } from "react-aria-components";
import { DateInput, DateSegment, Field, FieldGroup } from "../Field";
import type { DateFieldProps } from "./types";

/**
 * An accessible date input field allowing users to enter and edit date values using keyboard navigation.
 *
 * Implements Material Design 3 Text Field container styling with segment-based date editing,
 * internationalization, keyboard increment/decrement, and filled/outlined variants.
 *
 * @example
 * ```tsx
 * import { DateField } from "@adgytec/web-ui-components";
 * import { today, getLocalTimeZone } from "@internationalized/date";
 *
 * <DateField
 *     label="Birth Date"
 *     description="Please enter your date of birth"
 *     defaultValue={today(getLocalTimeZone())}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Outlined variant with validation
 * import { DateField } from "@adgytec/web-ui-components";
 *
 * <DateField
 *     variant="outlined"
 *     label="Event Date"
 *     isRequired
 * />
 * ```
 */
export const DateField = <T extends DateValue>({
    label,
    errorMessage,
    description,

    leading,
    trailing,
    variant,

    dateInputRef,
    ...props
}: DateFieldProps<T>) => {
    return (
        <AriaDateField {...props}>
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
        </AriaDateField>
    );
};
