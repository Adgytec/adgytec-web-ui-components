import type { DatePicker, DateValue } from "react-aria-components";
import type { RefProp } from "@/utils";
import type {
    CoreFieldGroupProps,
    CoreFieldProps,
    DateInput,
} from "../../Field";

export interface DatePickerProps<T extends DateValue>
    extends React.ComponentPropsWithRef<typeof DatePicker<T>>,
        CoreFieldGroupProps,
        Omit<CoreFieldProps, "leading">,
        RefProp<typeof DateInput, "dateInputRef"> {}
