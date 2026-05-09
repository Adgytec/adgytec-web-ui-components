import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";
import type { CoreInputProps } from "../core";

export type InputRenderProp =
    | ReactNode
    | ((isDisabled: boolean, isInvalid: boolean) => ReactNode);

export interface InputProps
    extends Omit<AriaTextFieldProps, "children">,
        CoreInputProps {
    placeholder?: string;
    editorDir?: string;
    prefix?: InputRenderProp;
    suffix?: InputRenderProp;
    leadingIcon?: LucideIcon;
    trailing?: InputRenderProp;
    showCharacterCount?: boolean;
}
