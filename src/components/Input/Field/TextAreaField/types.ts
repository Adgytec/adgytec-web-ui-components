import type { TextArea, TextField } from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreFieldGroupProps, CoreFieldProps } from "../Field";

export interface TextAreaFieldProps
    extends Omit<
            React.ComponentPropsWithRef<typeof TextField>,
            "children" | "type"
        >,
        CoreFieldGroupProps,
        Omit<CoreFieldProps, "leading" | "trailing">,
        RefProp<typeof TextArea, "textAreaRef"> {
    placeholder?: string;
    rows?: number;
    cols?: number;
    showCharacterCount?: boolean;
}
