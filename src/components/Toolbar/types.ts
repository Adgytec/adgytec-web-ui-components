import type { Toolbar } from "react-aria-components";

export type ToolbarVariant = "docked" | "floating";

export type ToolbarColor = "standard" | "vibrant";

export interface ToolbarProps
    extends React.ComponentPropsWithRef<typeof Toolbar> {
    variant?: ToolbarVariant;
    color?: ToolbarColor;
}
