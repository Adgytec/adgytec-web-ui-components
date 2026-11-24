import type { ComboBox } from "react-aria-components";
import type { CoreFieldGroupProps } from "@/components/Input/Field";

/**
 * Props for the {@link ComboBox} component.
 * Extends React Aria's `ComboBox` props and {@link CoreFieldGroupProps}.
 */
export interface ComboBoxProps<
    T extends object,
    M extends "single" | "multiple" = "single",
> extends React.ComponentPropsWithRef<typeof ComboBox<T, M>>,
        CoreFieldGroupProps {
    /**
     * Whether to hide the tag chips rendering selected values in multiple selection mode.
     *
     * @default false
     */
    hideMultiSelectionTags?: boolean;
}
