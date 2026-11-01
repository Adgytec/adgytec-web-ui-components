import type { ReactNode } from "react";
import type { CheckboxField, CheckboxGroup } from "react-aria-components";
import type { CoreInputProps } from "../core";

/**
 * Alignment of the checkbox label text relative to the indicator box.
 *
 * - `"start"`: Label precedes the checkbox indicator.
 * - `"end"`: Label follows the checkbox indicator (default).
 */
export type CheckboxLabelPlacement = "start" | "end";

/**
 * Props for the [`CheckboxGroup`](src/components/Input/Checkbox/CheckboxGroup.tsx) component.
 *
 * Extends React Aria's `CheckboxGroup` props (excluding `children`) and [`CoreInputProps`](src/components/Input/core/types.ts).
 */
export interface CheckboxGroupProps
    extends Omit<React.ComponentPropsWithRef<typeof CheckboxGroup>, "children">,
        CoreInputProps {
    /** The child checkboxes or custom content rendered inside the group. */
    children?: ReactNode;

    /**
     * Default label placement applied to all child checkboxes within the group.
     * Can be overridden per individual [`Checkbox`](src/components/Input/Checkbox/Checkbox.tsx).
     *
     * @default "end"
     */
    labelPlacement?: CheckboxLabelPlacement;
}

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
    labelPlacement?: CheckboxLabelPlacement;
}
