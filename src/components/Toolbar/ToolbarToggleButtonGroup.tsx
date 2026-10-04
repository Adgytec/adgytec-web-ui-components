import clsx from "clsx";
import { ToggleButtonGroup } from "react-aria-components";
import styles from "./toolbar.module.css";

/**
 * Props for the {@link ToolbarToggleButtonGroup} component.
 * Extends React Aria Components `ToggleButtonGroup` props.
 */
export interface ToolbarToggleButtonGroupProps
    extends React.ComponentPropsWithRef<typeof ToggleButtonGroup> {}

/**
 * Section wrapper for grouping toggle buttons inside a {@link Toolbar}.
 *
 * Extends React Aria Components `ToggleButtonGroup` to arrange grouped toggle buttons
 * (e.g. alignment choices, text format styles) with appropriate toolbar spacing,
 * selection handling, and orientation alignment.
 *
 * @example
 * ```tsx
 * import {
 *     ToggleIconButton,
 *     Toolbar,
 *     ToolbarToggleButtonGroup,
 * } from "@adgytec/web-ui-components";
 * import { Bold, Italic } from "lucide-react";
 *
 * export function Example() {
 *     return (
 *         <Toolbar aria-label="Text styles">
 *             <ToolbarToggleButtonGroup selectionMode="multiple" aria-label="Format">
 *                 <ToggleIconButton id="bold" icon={Bold} aria-label="Bold" />
 *                 <ToggleIconButton id="italic" icon={Italic} aria-label="Italic" />
 *             </ToolbarToggleButtonGroup>
 *         </Toolbar>
 *     );
 * }
 * ```
 */
export const ToolbarToggleButtonGroup: React.FC<
    ToolbarToggleButtonGroupProps
> = ({ className, ...props }) => {
    return (
        <ToggleButtonGroup
            className={(renderProps) =>
                clsx(
                    styles["section"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
