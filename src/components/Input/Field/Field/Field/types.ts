import type { Group } from "react-aria-components";
import type { CoreFieldProps } from "../core";

/**
 * Props for the {@link Field} container component.
 * Extends React Aria's `Group` props and core field styling props.
 */
export interface FieldProps
    extends React.ComponentPropsWithRef<typeof Group>,
        CoreFieldProps {}
