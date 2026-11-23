import type { ReactNode } from "react";
import type { RadioGroup } from "react-aria-components";
import type {
    CoreSelectionGroupProps,
    SelectionLabelPlacement,
} from "../../core";

/**
 * Alignment of the radio label text relative to the indicator circle.
 *
 * - `"start"`: Label precedes the radio indicator.
 * - `"end"`: Label follows the radio indicator (default).
 */
export type RadioLabelPlacement = SelectionLabelPlacement;

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

    /**
     * Whether to continue displaying the {@link description} supporting text even when
     * the input is invalid and rendering an error message.
     *
     * @default false
     */
    showDescriptionOnInvalid?: boolean;
}
