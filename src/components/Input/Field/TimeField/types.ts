import type { DateInput, TimeField, TimeValue } from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreFieldGroupProps, CoreFieldProps } from "../Field";

/**
 * Props for the {@link TimeField} component.
 * Extends React Aria's `TimeField` props (excluding `children`), core field props, and date input ref.
 *
 * @typeParam T - The time value type implementing {@link TimeValue}.
 */
export interface TimeFieldProps<T extends TimeValue>
    extends Omit<React.ComponentPropsWithRef<typeof TimeField<T>>, "children">,
        CoreFieldGroupProps,
        CoreFieldProps,
        RefProp<typeof DateInput, "dateInputRef"> {}
