import type { ReactNode } from "react";
import type { CheckboxGroup } from "react-aria-components";
import type { CoreSelectionGroupProps } from "../../core";

/**
 * Props for the [`CheckboxGroup`](src/components/Input/Checkbox/CheckboxGroup.tsx) component.
 *
 * Extends React Aria's `CheckboxGroup` props (excluding `children`) and [`CoreInputProps`](src/components/Input/core/types.ts).
 */
export interface CheckboxGroupProps
    extends Omit<React.ComponentPropsWithRef<typeof CheckboxGroup>, "children">,
        CoreSelectionGroupProps {
    /** The child checkboxes or custom content rendered inside the group. */
    children?: ReactNode;
}
