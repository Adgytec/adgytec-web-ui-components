import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type {
    TextFieldProps as AriaTextFieldProps,
    Input,
} from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../core";

/**
 * Render prop type for input adornments such as prefix, suffix, and trailing elements.
 * Can be static React nodes or a render function providing current interaction states.
 */
export type InputRenderProp =
    | ReactNode
    | (({
          isDisabled,
          isInvalid,
      }: {
          isDisabled: boolean;
          isInvalid: boolean;
      }) => ReactNode);

/**
 * Props for the {@link Input} component.
 * Extends React Aria's {@link AriaTextFieldProps}, {@link CoreInputProps}, and native input element ref.
 */
export interface InputProps
    extends Omit<AriaTextFieldProps, "children">,
        CoreInputProps,
        RefProp<typeof Input> {
    /** Placeholder text displayed when the input field is empty. */
    placeholder?: string;

    /** Text direction for the editable input area (e.g. `"ltr"`, `"rtl"`). */
    editorDir?: string;

    /** Content or render prop displayed immediately before the editable text input. */
    prefix?: InputRenderProp;

    /** Content or render prop displayed immediately after the editable text input. */
    suffix?: InputRenderProp;

    /** Leading Lucide icon displayed at the far start of the input container. */
    leadingIcon?: LucideIcon;

    /** Trailing content, such as action buttons or status indicators, displayed at the far end of the input container. */
    trailing?: InputRenderProp;

    /**
     * Whether to display the current character count below the field.
     * Requires `maxLength` to display the limit ratio.
     *
     * @default false
     */
    showCharacterCount?: boolean;
}
