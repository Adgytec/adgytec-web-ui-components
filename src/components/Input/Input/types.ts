import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type {
    TextFieldProps as AriaTextFieldProps,
    Input,
} from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../core";

export type InputRenderProp =
    | ReactNode
    | (({
          isDisabled,
          isInvalid,
      }: {
          isDisabled: boolean;
          isInvalid: boolean;
      }) => ReactNode);

export interface InputProps
    extends Omit<AriaTextFieldProps, "children">,
        CoreInputProps,
        RefProp<typeof Input> {
    placeholder?: string;
    editorDir?: string;
    prefix?: InputRenderProp;
    suffix?: InputRenderProp;
    leadingIcon?: LucideIcon;
    trailing?: InputRenderProp;
    showCharacterCount?: boolean;
}
