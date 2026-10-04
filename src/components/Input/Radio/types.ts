import type { ReactNode } from "react";
import type { Radio, RadioGroup } from "react-aria-components";
import type { CoreInputProps } from "../core";

/**
 * Alignment of the radio label text relative to the indicator circle.
 *
 * - `"start"`: Label precedes the radio indicator.
 * - `"end"`: Label follows the radio indicator (default).
 */
export type RadioLabelPlacement = "start" | "end";

/**
 * Props for the {@link RadioGroup} component.
 * Extends React Aria's `RadioGroup` props and {@link CoreInputProps}.
 */
export interface RadioGroupProps
    extends Omit<React.ComponentPropsWithRef<typeof RadioGroup>, "children">,
        CoreInputProps {
    /** The child radio buttons or custom layout structure rendered within the group. */
    children?: ReactNode;

    /**
     * Spacing (in pixels) between adjacent radio items.
     *
     * @default 24
     */
    radioItemsGap?: number;

    /**
     * Default label placement applied to all child radio items within the group.
     *
     * @default "end"
     */
    labelPlacement?: RadioLabelPlacement;

    /**
     * When `true`, displays the state layer (hover, press, focus) across the entire radio container.
     *
     * @default false
     */
    containerStateLayer?: boolean;
}

/**
 * Props for the {@link Radio} component.
 * Extends React Aria's `Radio` props.
 */
export interface RadioProps extends React.ComponentPropsWithRef<typeof Radio> {
    /**
     * Alignment of the label text relative to the indicator circle.
     *
     * @default "end"
     */
    labelPlacement?: RadioLabelPlacement;

    /**
     * When `true`, displays the state layer (hover, press, focus) across the entire radio container.
     *
     * @default false
     */
    containerStateLayer?: boolean;
}
