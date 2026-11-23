import type { Group } from "react-aria-components";
import type { CoreFieldProps } from "../core";

export interface FieldGroupProps
    extends React.ComponentPropsWithRef<typeof Group>,
        Omit<CoreFieldProps, "variant"> {
    hasLeading?: boolean;
    hasTrailing?: boolean;
}
