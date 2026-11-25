import type { ColorField, Input } from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreFieldGroupProps, CoreFieldProps } from "../core";

/**
 * Props for the {@link ColorField} component.
 * Extends React Aria's `ColorField` props (excluding `children`), core field props, and group props.
 */
export interface ColorFieldProps
    extends Omit<React.ComponentPropsWithRef<typeof ColorField>, "children">,
        CoreFieldGroupProps,
        CoreFieldProps,
        RefProp<typeof Input, "inputRef"> {
    /**
     * Placeholder text displayed inside the color input when it is empty.
     */
    placeholder?: string;
}
