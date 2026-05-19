import type {
    DateRangePickerProps as AriaDateRangePickerProps,
    DateInput,
    DateValue,
} from "react-aria-components";
import type { WeekdayStyle } from "@/components/Calendar/core";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../../core";

export interface DateRangePickerProps<T extends DateValue>
    extends Omit<AriaDateRangePickerProps<T>, "children">,
        CoreInputProps,
        RefProp<typeof DateInput> {
    weekdayStyle?: WeekdayStyle;
}
