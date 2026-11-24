import type { DateRangePicker, DateValue } from "react-aria-components";
import type { RefProp } from "@/utils";
import type {
    CoreFieldGroupProps,
    CoreFieldProps,
    DateInput,
} from "../../Field";

/**
 * Props for the {@link DateRangePicker} component.
 * Extends React Aria's `DateRangePicker` props, core field group props, and date input ref.
 *
 * @typeParam T - The date value type implementing {@link DateValue}.
 */
export interface DateRangePickerProps<T extends DateValue>
    extends React.ComponentPropsWithRef<typeof DateRangePicker<T>>,
        CoreFieldGroupProps,
        Omit<CoreFieldProps, "leading">,
        RefProp<typeof DateInput, "dateInputRef"> {}
