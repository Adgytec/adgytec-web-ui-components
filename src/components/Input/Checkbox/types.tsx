import type { ReactNode } from "react";
import type { Checkbox, CheckboxGroup } from "react-aria-components";
import type { CoreInputProps } from "../core";

/**
 * Alignment of the checkbox label text relative to the indicator box.
 *
 * - `"start"`: Label precedes the checkbox indicator.
 * - `"end"`: Label follows the checkbox indicator (default).
 */
export type CheckboxLabelPlacement = "start" | "end";

/**
 * Props for the {@link CheckboxGroup} component.
 * Extends React Aria's `CheckboxGroup` props and {@link CoreInputProps}.
 */
export interface CheckboxGroupProps
    extends Omit<React.ComponentPropsWithRef<typeof CheckboxGroup>, "children">,
        CoreInputProps {
    /** The child checkboxes or custom content rendered inside the group. */
    children?: ReactNode;

    /**
     * Vertical spacing (in pixels) between child checkbox items.
     *
     * @default 24
     */
    checkboxItemsGap?: number;

    /**
     * Default label placement applied to all child checkboxes within the group.
     *
     * @default "end"
     */
    labelPlacement?: CheckboxLabelPlacement;

    /**
     * When `true`, displays the state layer (hover, press, focus) across the entire checkbox container
     * rather than only on the indicator box.
     *
     * @default false
     */
    containerStateLayer?: boolean;
}

/**
 * Props for the {@link Checkbox} component.
 * Extends React Aria's `Checkbox` props.
 */
export interface CheckboxProps
    extends React.ComponentPropsWithRef<typeof Checkbox> {
    /**
     * Alignment of the label text relative to the indicator box.
     * Overrides the group-level setting if nested inside a {@link CheckboxGroup}.
     *
     * @default "end"
     */
    labelPlacement?: CheckboxLabelPlacement;

    /**
     * When `true`, displays the state layer (hover, press, focus) across the entire checkbox container.
     *
     * @default false
     */
    containerStateLayer?: boolean;
}
