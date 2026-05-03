import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type {
    TextFieldProps as AriaTextFieldProps,
    ValidationResult,
} from "react-aria-components";

export type InputRenderProp =
    | ReactNode
    | ((isDisabled: boolean, isInvalid: boolean) => ReactNode);

export interface InputProps extends Omit<AriaTextFieldProps, "children"> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    placeholder?: string;
    editorDir?: string;
    prefix?: InputRenderProp;
    suffix?: InputRenderProp;
    leadingIcon?: LucideIcon;
    trailing?: InputRenderProp;
    showCharacterCount?: boolean;
}
