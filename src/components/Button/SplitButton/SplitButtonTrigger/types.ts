import type { Button } from "react-aria-components";

/**
 * Props for the {@link SplitButtonTrigger} component.
 * Extends React Aria's {@link Button} props (omitting `children`) with tooltip support.
 */
export interface SplitButtonTriggerProps
    extends Omit<React.ComponentPropsWithRef<typeof Button>, "children"> {
    /** Optional tooltip text displayed on hover. */
    tooltip?: string;
}
