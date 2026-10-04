import type { Select } from "react-aria-components";
import type { CoreInputProps } from "../../core";

/**
 * Props for the {@link Select} component.
 * Extends React Aria's {@link Select} props and {@link CoreInputProps}.
 */
export interface SelectProps<
    T extends object,
    M extends "single" | "multiple" = "single",
> extends React.ComponentPropsWithRef<typeof Select<T, M>>,
        CoreInputProps {}
