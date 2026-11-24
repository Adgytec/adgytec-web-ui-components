import type { DateField, DateInput, DateValue } from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreFieldGroupProps, CoreFieldProps } from "../Field";

/**
 * Props for the {@link DateField} component.
 * Extends React Aria's `DateField` props (excluding `children`), core field props, and date input ref.
 *
 * @typeParam T - The date value type implementing {@link DateValue}.
 */
export interface DateFieldProps<T extends DateValue>
    extends Omit<React.ComponentPropsWithRef<typeof DateField<T>>, "children">,
        CoreFieldGroupProps,
        CoreFieldProps,
        RefProp<typeof DateInput, "dateInputRef"> {}
