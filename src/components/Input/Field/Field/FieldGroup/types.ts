import type { Group } from "react-aria-components";
import type { CoreFieldGroupProps } from "../core";

export interface FieldGroupProps
    extends React.ComponentPropsWithRef<typeof Group>,
        Omit<CoreFieldGroupProps, "variant"> {
    hasLeading?: boolean;
    hasTrailing?: boolean;
}
