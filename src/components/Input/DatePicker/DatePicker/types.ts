import type {
    DatePickerProps as AriaDatePickerProps,
    DateInput,
    DateValue,
} from "react-aria-components";
import type { WeekdayStyle } from "@/components/Calendar/core";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../../core";

export interface DatePickerProps<T extends DateValue>
    extends Omit<AriaDatePickerProps<T>, "children">,
        CoreInputProps,
        RefProp<typeof DateInput> {
    weekdayStyle?: WeekdayStyle;
}
