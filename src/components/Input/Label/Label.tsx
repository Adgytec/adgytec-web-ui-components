import clsx from "clsx";
import { Label as AriaLabel } from "react-aria-components";
import { typography } from "@/utils/typography";

/**
 * Props for the {@link Label} component.
 * Extends React Aria's {@link AriaLabel} props.
 */
export interface LabelProps
    extends React.ComponentPropsWithRef<typeof AriaLabel> {}

/**
 * Accessible field label rendered above or adjacent to an input component.
 *
 * Implements Material Design 3 `labelLarge` typography.
 */
export const Label: React.FC<LabelProps> = ({ className, ...props }) => {
    return (
        <AriaLabel
            slot="label"
            className={clsx(typography.labelLarge, className)}
            {...props}
        />
    );
};
