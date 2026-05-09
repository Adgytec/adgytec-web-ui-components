import type { SelectProps as AriaSelectProps } from "react-aria-components";
import type { CoreInputProps } from "../../core";

export interface SelectProps<
    T extends object,
    M extends "single" | "multiple" = "single",
> extends AriaSelectProps<T, M>,
        CoreInputProps {}
