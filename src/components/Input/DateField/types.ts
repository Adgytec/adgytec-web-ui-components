import type {
    DateFieldProps as AriaDateFieldProps,
    DateInput,
    DateValue,
} from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../core";

/**
 * Props for the {@link DateField} component.
 * Extends React Aria's {@link AriaDateFieldProps}, {@link CoreInputProps}, and native date input ref.
 */
export interface DateFieldProps<T extends DateValue>
    extends Omit<AriaDateFieldProps<T>, "children">,
        CoreInputProps,
        RefProp<typeof DateInput> {}
