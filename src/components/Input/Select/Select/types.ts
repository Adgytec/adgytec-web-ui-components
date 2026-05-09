import type { Select } from "react-aria-components";
import type { CoreInputProps } from "../../core";

export interface SelectProps<
    T extends object,
    M extends "single" | "multiple" = "single",
> extends React.ComponentPropsWithRef<typeof Select<T, M>>,
        CoreInputProps {}
