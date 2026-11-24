import type { TextArea, TextField } from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreFieldGroupProps, CoreFieldProps } from "../Field";

/**
 * Props for the {@link TextAreaField} component.
 * Extends React Aria's `TextField` props (excluding `children` and `type`), core field group props, and text area ref.
 */
export interface TextAreaFieldProps
    extends Omit<
            React.ComponentPropsWithRef<typeof TextField>,
            "children" | "type"
        >,
        CoreFieldGroupProps,
        Omit<CoreFieldProps, "leading" | "trailing">,
        RefProp<typeof TextArea, "textAreaRef"> {
    /**
     * Placeholder text displayed inside the text area when it is empty.
     */
    placeholder?: string;

    /**
     * The visible height of a text area, in lines of text.
     */
    rows?: number;

    /**
     * The visible width of a text area, in average character widths.
     */
    cols?: number;

    /**
     * Whether to display the character counter below the text area.
     * Requires `maxLength` to be specified to display `current / max` format.
     *
     * @default false
     */
    showCharacterCount?: boolean;
}
