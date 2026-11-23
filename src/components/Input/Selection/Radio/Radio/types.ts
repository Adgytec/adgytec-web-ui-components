import type { RadioField } from "react-aria-components";
import type { SelectionLabelPlacement } from "../../core";

/**
 * Props for the [`Radio`](src/components/Input/Selection/Radio/Radio/Radio.tsx) component.
 *
 * Extends all properties from React Aria's `RadioField`, including selection value and accessibility states.
 */
export interface RadioProps
    extends React.ComponentPropsWithRef<typeof RadioField> {
    /**
     * Alignment of the label text relative to the indicator circle.
     * If omitted, inherits from the parent [`RadioGroup`](src/components/Input/Selection/Radio/RadioGroup/RadioGroup.tsx) `labelPlacement`.
     *
     * @default "end"
     */
    labelPlacement?: SelectionLabelPlacement;
}
