import type {
    NumberFieldProps as AriaNumberFieldProps,
    Input,
} from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../core";

/**
 * Props for the {@link NumberField} component.
 * Extends React Aria's {@link AriaNumberFieldProps}, {@link CoreInputProps}, and native input element ref.
 */
export interface NumberFieldProps
    extends Omit<AriaNumberFieldProps, "children">,
        CoreInputProps,
        RefProp<typeof Input> {
    /** Placeholder text displayed when the input field is empty. */
    placeholder?: string;

    /**
     * Controls the visibility and layout of the increment and decrement stepper buttons.
     *
     * - `"both"`: Displays both decrement (leading) and increment (trailing) buttons (default).
     * - `"increment"`: Displays only the increment (trailing) button.
     * - `"decrement"`: Displays only the decrement (leading) button.
     * - `"none"`: Hides both stepper buttons.
     *
     * @default "both"
     */
    showButton?: "none" | "both" | "increment" | "decrement";
}
