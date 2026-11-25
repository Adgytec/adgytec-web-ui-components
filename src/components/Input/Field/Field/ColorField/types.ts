import type { ColorField, Input } from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreFieldGroupProps, CoreFieldProps } from "../core";

export interface ColorFieldProps
    extends Omit<React.ComponentPropsWithRef<typeof ColorField>, "children">,
        CoreFieldGroupProps,
        CoreFieldProps,
        RefProp<typeof Input, "inputRef"> {
    placeholder?: string;
}
