import type {
    DateRangePickerProps as AriaDateRangePickerProps,
    DateInput,
    DateValue,
} from "react-aria-components";
import type { WeekdayStyle } from "@/components/Calendar/core";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../../core";

/**
 * Props for the {@link DateRangePicker} component.
 * Extends React Aria's {@link AriaDateRangePickerProps}, {@link CoreInputProps}, and native start date input ref.
 */
export interface DateRangePickerProps<T extends DateValue>
    extends Omit<AriaDateRangePickerProps<T>, "children">,
        CoreInputProps,
        RefProp<typeof DateInput> {
    /**
     * Formatting style for weekday column headers in the range calendar popover.
     *
     * - `"narrow"`: Typically a single character (e.g. "S", "M", "T").
     * - `"short"`: Abbreviated weekday name (e.g. "Sun", "Mon", "Tue").
     */
    weekdayStyle?: WeekdayStyle;
}
