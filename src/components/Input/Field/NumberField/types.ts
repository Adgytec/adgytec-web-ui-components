import type { Input, NumberField } from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreFieldGroupProps, CoreFieldProps } from "../Field";

/**
 * Props for the {@link NumberField} component.
 * Extends React Aria's `NumberField` props (excluding `children`), core field props, and group props.
 */
export interface NumberFieldProps
    extends Omit<React.ComponentPropsWithRef<typeof NumberField>, "children">,
        CoreFieldGroupProps,
        CoreFieldProps,
        RefProp<typeof Input, "inputRef"> {
    /**
     * Placeholder text displayed inside the number input when it is empty.
     */
    placeholder?: string;

    /**
     * Text directionality for the inner editor (`"ltr"`, `"rtl"`, or `"auto"`).
     */
    editorDir?: string;
}
