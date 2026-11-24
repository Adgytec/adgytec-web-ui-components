import type { ReactNode } from "react";
import type { Input, TextField } from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreFieldGroupProps, CoreFieldProps } from "../Field";

export interface TextFieldProps
    extends Omit<React.ComponentPropsWithRef<typeof TextField>, "children">,
        CoreFieldGroupProps,
        CoreFieldProps,
        RefProp<typeof Input, "inputRef"> {
    placeholder?: string;
    editorDir?: string;
    showCharacterCount?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
}
