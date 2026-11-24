import type { DateField, DateInput, DateValue } from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreFieldGroupProps, CoreFieldProps } from "../Field";

export interface DateFieldProps<T extends DateValue>
    extends Omit<React.ComponentPropsWithRef<typeof DateField<T>>, "children">,
        CoreFieldGroupProps,
        CoreFieldProps,
        RefProp<typeof DateInput, "dateInputRef"> {}
