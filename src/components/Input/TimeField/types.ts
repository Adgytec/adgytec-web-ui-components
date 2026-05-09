import type {
    TimeFieldProps as AriaTimeFieldProps,
    TimeValue,
} from "react-aria-components";
import type { CoreInputProps } from "../core";

export interface TimeFieldProps<T extends TimeValue>
    extends Omit<AriaTimeFieldProps<T>, "children">,
        CoreInputProps {}
