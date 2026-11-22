import type {
    NumberFieldProps as AriaNumberFieldProps,
    Input,
} from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreInputProps } from "../core";

export interface NumberFieldProps
    extends Omit<AriaNumberFieldProps, "children">,
        CoreInputProps,
        RefProp<typeof Input> {
    /** Placeholder text displayed when the input field is empty. */
    placeholder?: string;

    showButton?: "none" | "both" | "increment" | "decrement";
}
