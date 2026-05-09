import type {
    TextFieldProps as AriaTextFieldProps,
    TextArea,
} from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../core";

export interface TextAreaProps
    extends Omit<AriaTextFieldProps, "children" | "type">,
        CoreInputProps,
        RefProp<typeof TextArea> {
    placeholder?: string;
    showCharacterCount?: boolean;
    rows?: number;
}
