import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";
import type { CoreInputProps } from "../core";

export interface TextAreaProps
    extends Omit<AriaTextFieldProps, "children" | "type">,
        CoreInputProps {
    placeholder?: string;
    showCharacterCount?: boolean;
    rows?: number;
}
