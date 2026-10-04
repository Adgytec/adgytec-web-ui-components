import type { ComboBox } from "react-aria-components";
import type { CoreInputProps } from "../../core";

/**
 * Props for the {@link ComboBox} component.
 * Extends React Aria's `ComboBox` props and {@link CoreInputProps}.
 */
export interface ComboBoxProps<
    T extends object,
    M extends "single" | "multiple" = "single",
> extends React.ComponentPropsWithRef<typeof ComboBox<T, M>>,
        CoreInputProps {
    /**
     * Whether to hide the tag chips rendering selected values in multiple selection mode.
     *
     * @default false
     */
    hideMultiSelectionValue?: boolean;
}
