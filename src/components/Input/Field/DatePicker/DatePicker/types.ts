import type { DatePicker, DateValue } from "react-aria-components";
import type { RefProp } from "@/utils";
import type {
    CoreFieldGroupProps,
    CoreFieldProps,
    DateInput,
} from "../../Field";

/**
 * Props for the {@link DatePicker} component.
 * Extends React Aria's `DatePicker` props, core field group props, and date input ref.
 *
 * @typeParam T - The date value type implementing {@link DateValue}.
 */
export interface DatePickerProps<T extends DateValue>
    extends React.ComponentPropsWithRef<typeof DatePicker<T>>,
        CoreFieldGroupProps,
        Omit<CoreFieldProps, "leading">,
        RefProp<typeof DateInput, "dateInputRef"> {}
