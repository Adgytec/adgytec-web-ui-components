import type { Toolbar } from "react-aria-components";

/**
 * Visual variant of the toolbar container.
 *
 * - `"docked"`: Standard toolbar attached or positioned flush without drop shadow.
 * - `"floating"`: Floating toolbar elevated with an elevation shadow (`--md-sys-elevation-shadow-3`).
 */
export type ToolbarVariant = "docked" | "floating";

/**
 * Color scheme applied to the toolbar and its contained controls.
 *
 * - `"standard"`: Neutral theme using surface container tones.
 * - `"vibrant"`: Accent theme using primary container tones.
 */
export type ToolbarColor = "standard" | "vibrant";

/**
 * Props for the {@link Toolbar} component.
 * Extends React Aria Components `Toolbar` props with variant and color options.
 *
 * Usage recommendations:
 * - Use small-sized buttons (e.g. `size="small"` or `IconButton` / `ToggleIconButton`).
 * - For vertical orientation, use `IconButton` or `ToggleIconButton`.
 * - To group toggle buttons, use `ToolbarToggleButtonGroup` instead of standard button groups.
 * - For dividers within horizontal toolbars, use `<Divider orientation="vertical" />`.
 *
 * Configurable CSS tokens:
 * - `--md-toolbar-background`: Background color of the toolbar.
 * - `--md-toolbar-button-background`: Background color for buttons within the toolbar.
 * - `--md-toolbar-toggle-button-background`: Background color for toggle buttons.
 * - `--md-toolbar-toggle-button-selected-background`: Background color for selected toggle buttons.
 * - `--md-toolbar-button-color`: Text and icon color for buttons within the toolbar.
 * - `--md-toolbar-toggle-button-color`: Text and icon color for toggle buttons within the toolbar.
 * - `--md-toolbar-toggle-button-selected-color`: Text and icon color for selected toggle buttons.
 *
 * @example
 * ```tsx
 * import {
 *     IconButton,
 *     Toolbar,
 * } from "@adgytec/web-ui-components";
 * import { Bold, Italic, Underline } from "lucide-react";
 *
 * export function Example() {
 *     return (
 *         <Toolbar aria-label="Text formatting" variant="floating" color="standard">
 *             <IconButton icon={Bold} aria-label="Bold" />
 *             <IconButton icon={Italic} aria-label="Italic" />
 *             <IconButton icon={Underline} aria-label="Underline" />
 *         </Toolbar>
 *     );
 * }
 * ```
 */
export interface ToolbarProps
    extends React.ComponentPropsWithRef<typeof Toolbar> {
    /**
     * Visual variant of the toolbar.
     *
     * @default "docked"
     */
    variant?: ToolbarVariant;

    /**
     * Color scheme applied to the toolbar and its child actions.
     *
     * @default "standard"
     */
    color?: ToolbarColor;
}
