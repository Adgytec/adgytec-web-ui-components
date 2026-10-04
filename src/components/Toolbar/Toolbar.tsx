import clsx from "clsx";
import { Toolbar as AriaToolbar } from "react-aria-components";
import styles from "./toolbar.module.css";
import type { ToolbarProps } from "./types";

/**
 * Container for a set of related action buttons, toggle buttons, and dividers, following
 * [Material 3 Toolbar](https://m3.material.io/) design patterns.
 *
 * Extends React Aria Components `Toolbar` with Material 3 styling and interactive behaviors:
 * - Manages single-tab-stop keyboard navigation across action items using arrow keys.
 * - Supports horizontal and vertical orientations via the `orientation` prop.
 * - Supports docked and elevated floating display variants via `variant`.
 * - Provides `"standard"` (surface container) and `"vibrant"` (primary container) color themes via `color`.
 * - Automatically adjusts button borders, shadows, and colors to seamlessly fit the toolbar surface.
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
 *     Divider,
 *     IconButton,
 *     ToggleIconButton,
 *     Toolbar,
 *     ToolbarToggleButtonGroup,
 * } from "@adgytec/web-ui-components";
 * import { AlignCenter, AlignLeft, AlignRight, Bold, Italic } from "lucide-react";
 *
 * export function EditorToolbar() {
 *     return (
 *         <Toolbar aria-label="Editor actions" variant="floating">
 *             <ToolbarToggleButtonGroup selectionMode="single">
 *                 <ToggleIconButton id="left" icon={AlignLeft} aria-label="Align left" />
 *                 <ToggleIconButton id="center" icon={AlignCenter} aria-label="Align center" />
 *                 <ToggleIconButton id="right" icon={AlignRight} aria-label="Align right" />
 *             </ToolbarToggleButtonGroup>
 *             <Divider orientation="vertical" />
 *             <IconButton icon={Bold} aria-label="Bold" />
 *             <IconButton icon={Italic} aria-label="Italic" />
 *         </Toolbar>
 *     );
 * }
 * ```
 */
export const Toolbar: React.FC<ToolbarProps> = ({
    className,
    variant = "docked",
    color = "standard",
    ...props
}) => {
    return (
        <AriaToolbar
            className={(renderProps) =>
                clsx(
                    styles["toolbar"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-variant={variant}
            data-color={color}
        />
    );
};
