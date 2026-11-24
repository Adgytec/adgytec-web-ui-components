import type { ReactNode } from "react";
import type { Input, TextField } from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreFieldGroupProps, CoreFieldProps } from "../Field";

/**
 * Props for the {@link TextField} component.
 * Extends React Aria's `TextField` props (excluding `children`), core field props, and group props.
 */
export interface TextFieldProps
    extends Omit<React.ComponentPropsWithRef<typeof TextField>, "children">,
        CoreFieldGroupProps,
        CoreFieldProps,
        RefProp<typeof Input, "inputRef"> {
    /**
     * Placeholder text displayed inside the text input when it is empty.
     */
    placeholder?: string;

    /**
     * Text directionality for the inner editor (`"ltr"`, `"rtl"`, or `"auto"`).
     */
    editorDir?: string;

    /**
     * Whether to display the character counter below the input.
     * Requires `maxLength` to be specified to display `current / max` format.
     *
     * @default false
     */
    showCharacterCount?: boolean;

    /**
     * Decorative content or prefix text displayed immediately before the input text.
     */
    prefix?: ReactNode;

    /**
     * Decorative content or suffix text displayed immediately after the input text.
     */
    suffix?: ReactNode;
}
