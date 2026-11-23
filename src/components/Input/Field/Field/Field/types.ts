import type { ReactNode } from "react";
import type { Group } from "react-aria-components";
import type { FieldVariant } from "../core";

export interface FieldProps extends React.ComponentPropsWithRef<typeof Group> {
    leading?: ReactNode;

    trailing?: ReactNode;

    variant?: FieldVariant;
}
