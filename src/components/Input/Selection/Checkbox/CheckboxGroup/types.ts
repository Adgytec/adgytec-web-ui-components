import type { ReactNode } from "react";
import type { CheckboxGroup } from "react-aria-components";
import type { CoreSelectionGroupProps } from "../../core";

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
        CoreSelectionGroupProps {
    /** The child checkboxes or custom content rendered inside the group. */
    children?: ReactNode;
}
