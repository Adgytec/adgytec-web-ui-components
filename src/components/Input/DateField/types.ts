import type {
    DateFieldProps as AriaDateFieldProps,
    DateValue,
} from "react-aria-components";
import type { CoreInputProps } from "../core";

export interface DateFieldProps<T extends DateValue>
    extends Omit<AriaDateFieldProps<T>, "children">,
        CoreInputProps {}
