import type { CoreFieldGroupProps } from "../core";

export interface FieldGroupProps
    extends React.ComponentPropsWithRef<"div">,
        Omit<CoreFieldGroupProps, "variant"> {
    isInvalid?: boolean;
    isDisabled?: boolean;
    hasLeading?: boolean;
    hasTrailing?: boolean;
    renderFieldErrorComp?: boolean;
}
