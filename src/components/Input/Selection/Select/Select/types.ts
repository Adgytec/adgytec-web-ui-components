import type { Select } from "react-aria-components";
import type { CoreFieldGroupProps } from "@/components/Input/Field";

/**
 * Props for the {@link Select} component.
 * Extends React Aria's {@link Select} props and {@link CoreFieldGroupProps}.
 */
export interface SelectProps<
    T extends object,
    M extends "single" | "multiple" = "single",
> extends React.ComponentPropsWithRef<typeof Select<T, M>>,
        CoreFieldGroupProps {}
