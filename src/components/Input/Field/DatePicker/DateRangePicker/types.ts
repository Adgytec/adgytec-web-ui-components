import type { DateRangePicker, DateValue } from "react-aria-components";
import type { RefProp } from "@/utils";
import type {
    CoreFieldGroupProps,
    CoreFieldProps,
    DateInput,
} from "../../Field";

export interface DateRangePickerProps<T extends DateValue>
    extends React.ComponentPropsWithRef<typeof DateRangePicker<T>>,
        CoreFieldGroupProps,
        Omit<CoreFieldProps, "leading">,
        RefProp<typeof DateInput, "dateInputRef"> {}
