import type { CoreFieldGroupProps } from "../core";

/**
 * Props for the {@link FieldGroup} layout component.
 */
export interface FieldGroupProps
    extends React.ComponentPropsWithRef<"div">,
        Omit<CoreFieldGroupProps, "variant"> {
    /** Whether the grouped field is in an invalid state. */
    isInvalid?: boolean;

    /** Whether the grouped field is disabled. */
    isDisabled?: boolean;

    /** Whether the field contains a leading icon or button. */
    hasLeading?: boolean;

    /** Whether the field contains a trailing icon or button. */
    hasTrailing?: boolean;
}
