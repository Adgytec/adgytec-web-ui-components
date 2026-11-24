import type { DateInput, TimeField, TimeValue } from "react-aria-components";
import type { RefProp } from "@/utils";
import type { CoreFieldGroupProps, CoreFieldProps } from "../Field";

export interface TimeFieldProps<T extends TimeValue>
    extends Omit<React.ComponentPropsWithRef<typeof TimeField<T>>, "children">,
        CoreFieldGroupProps,
        CoreFieldProps,
        RefProp<typeof DateInput, "dateInputRef"> {}
