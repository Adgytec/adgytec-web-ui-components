import type {
    DateFieldProps as AriaDateFieldProps,
    DateInput,
    DateValue,
} from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../core";

export interface DateFieldProps<T extends DateValue>
    extends Omit<AriaDateFieldProps<T>, "children">,
        CoreInputProps,
        RefProp<typeof DateInput> {}
