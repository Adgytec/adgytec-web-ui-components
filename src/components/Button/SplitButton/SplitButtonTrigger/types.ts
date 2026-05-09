import type { Button } from "react-aria-components";

export interface SplitButtonTriggerProps
    extends Omit<
        React.ComponentPropsWithRef<typeof Button>,
        "children" | "className"
    > {
    tooltip?: string;
}
