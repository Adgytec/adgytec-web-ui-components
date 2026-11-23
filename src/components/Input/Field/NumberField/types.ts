import type { Input, NumberField } from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreFieldGroupProps, CoreFieldProps } from "../Field";

export interface NumberFieldProps
    extends React.ComponentPropsWithRef<typeof NumberField>,
        CoreFieldGroupProps,
        CoreFieldProps,
        RefProp<typeof Input, "inputRef"> {
    placeholder?: string;
}
