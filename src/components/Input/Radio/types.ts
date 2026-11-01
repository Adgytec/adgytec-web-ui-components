import type { ReactNode } from "react";
import type { RadioField, RadioGroup } from "react-aria-components";
import type { CoreInputProps } from "../core";

/**
 * Alignment of the radio label text relative to the indicator circle.
 *
 * - `"start"`: Label precedes the radio indicator.
 * - `"end"`: Label follows the radio indicator (default).
 */
export type RadioLabelPlacement = "start" | "end";

/**
 * Props for the [`RadioGroup`](src/components/Input/Radio/RadioGroup.tsx) component.
 *
 * Extends React Aria's `RadioGroup` props (excluding `children` and `orientation`) and [`CoreInputProps`](src/components/Input/core/types.ts).
 */
export interface RadioGroupProps
    extends Omit<
            React.ComponentPropsWithRef<typeof RadioGroup>,
            "children" | "orientation"
        >,
        CoreInputProps {
    /** The child radio buttons or custom layout structure rendered within the group. */
    children?: ReactNode;

    /**
     * Default label placement applied to all child radio items within the group.
     * Can be overridden per individual [`Radio`](src/components/Input/Radio/Radio.tsx).
     *
     * @default "end"
     */
    labelPlacement?: RadioLabelPlacement;
}

/**
 * Props for the [`Radio`](src/components/Input/Radio/Radio.tsx) component.
 *
 * Extends all properties from React Aria's `RadioField`, including selection value and accessibility states.
 */
export interface RadioProps
    extends React.ComponentPropsWithRef<typeof RadioField> {
    /**
     * Alignment of the label text relative to the indicator circle.
     * If omitted, inherits from the parent [`RadioGroup`](src/components/Input/Radio/RadioGroup.tsx) `labelPlacement`.
     *
     * @default "end"
     */
    labelPlacement?: RadioLabelPlacement;
}
