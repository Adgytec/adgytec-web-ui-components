import type {
    DatePickerProps as AriaDatePickerProps,
    DateInput,
    DateValue,
} from "react-aria-components";
import type { WeekdayStyle } from "@/components/Calendar/core";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../../core";

/**
 * Props for the {@link DatePicker} component.
 * Extends React Aria's {@link AriaDatePickerProps}, {@link CoreInputProps}, and native date input ref.
 */
export interface DatePickerProps<T extends DateValue>
    extends Omit<AriaDatePickerProps<T>, "children">,
        CoreInputProps,
        RefProp<typeof DateInput> {
    /**
     * Formatting style for weekday column headers in the calendar popover.
     *
     * - `"narrow"`: Typically a single character (e.g. "S", "M", "T").
     * - `"short"`: Abbreviated weekday name (e.g. "Sun", "Mon", "Tue").
     */
    weekdayStyle?: WeekdayStyle;
}
