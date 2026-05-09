import type {
    TimeFieldProps as AriaTimeFieldProps,
    DateInput,
    TimeValue,
} from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../core";

export interface TimeFieldProps<T extends TimeValue>
    extends Omit<AriaTimeFieldProps<T>, "children">,
        CoreInputProps,
        RefProp<typeof DateInput> {}
