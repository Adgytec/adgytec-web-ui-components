import type { ReactNode } from "react";
import type { RadioGroup } from "react-aria-components";
import type { CoreSelectionGroupProps } from "../../core";

/**
 * Props for the [`RadioGroup`](src/components/Input/Selection/Radio/RadioGroup/RadioGroup.tsx) component.
 *
 * Extends React Aria's `RadioGroup` props (excluding `children` and `orientation`) and [`CoreSelectionGroupProps`](src/components/Input/Selection/core/selection.ts).
 */
export interface RadioGroupProps
    extends Omit<
            React.ComponentPropsWithRef<typeof RadioGroup>,
            "children" | "orientation"
        >,
        CoreSelectionGroupProps {
    /** The child radio buttons or custom layout structure rendered within the group. */
    children?: ReactNode;
}
