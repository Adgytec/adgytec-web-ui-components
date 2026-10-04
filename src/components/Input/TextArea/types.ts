import type {
    TextFieldProps as AriaTextFieldProps,
    TextArea,
} from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../core";

/**
 * Props for the {@link TextArea} component.
 * Extends React Aria's {@link AriaTextFieldProps}, {@link CoreInputProps}, and native textarea element ref.
 */
export interface TextAreaProps
    extends Omit<AriaTextFieldProps, "children" | "type">,
        CoreInputProps,
        RefProp<typeof TextArea> {
    /** Placeholder text displayed when the multiline textarea is empty. */
    placeholder?: string;

    /**
     * Whether to display the character count below the textarea.
     *
     * @default false
     */
    showCharacterCount?: boolean;

    /** Number of visible text lines in the textarea. */
    rows?: number;
}
