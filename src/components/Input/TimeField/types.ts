import type {
    TimeFieldProps as AriaTimeFieldProps,
    DateInput,
    TimeValue,
} from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../core";

/**
 * Props for the {@link TimeField} component.
 * Extends React Aria's {@link AriaTimeFieldProps}, {@link CoreInputProps}, and native time input ref.
 */
export interface TimeFieldProps<T extends TimeValue>
    extends Omit<AriaTimeFieldProps<T>, "children">,
        CoreInputProps,
        RefProp<typeof DateInput> {}
