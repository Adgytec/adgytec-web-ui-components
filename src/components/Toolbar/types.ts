import type { Toolbar } from "react-aria-components";

export type ToolbarVariant = "docked" | "floating";

export type ToolbarColor = "standard" | "vibrant";

// use toolbar with buttons of size -> small
// don't use button group inside toolbar, instead use ToolbarToggleButtonGroup
// use icon button for vertical orientation toolbar
export interface ToolbarProps
    extends React.ComponentPropsWithRef<typeof Toolbar> {
    variant?: ToolbarVariant;
    color?: ToolbarColor;
}
