import type { CheckboxField } from "react-aria-components";
import type { SelectionLabelPlacement } from "../../core";

/**
 * Props for the [`Checkbox`](src/components/Input/Checkbox/Checkbox.tsx) component.
 *
 * Extends all properties from React Aria's `CheckboxField`, including selection states,
 * form submission, indeterminate state, validation, and accessibility.
 */
export interface CheckboxProps
    extends React.ComponentPropsWithRef<typeof CheckboxField> {
    /**
     * Alignment of the label text relative to the indicator box.
     * Overrides the group-level setting if nested inside a [`CheckboxGroup`](src/components/Input/Checkbox/CheckboxGroup.tsx).
     *
     * @default "end"
     */
    labelPlacement?: SelectionLabelPlacement;
}
