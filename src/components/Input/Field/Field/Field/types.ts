import type { Group } from "react-aria-components";
import type { CoreFieldProps } from "../core";

export interface FieldProps
    extends React.ComponentPropsWithRef<typeof Group>,
        CoreFieldProps {}
