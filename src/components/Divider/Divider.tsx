import { clsx } from "clsx";
import { Separator } from "react-aria-components";
import styles from "./divider.module.css";

/**
 * Props for the {@link Divider} component.
 * Extends React Aria's {@link Separator} props, supporting orientation (`"horizontal"` or `"vertical"`),
 * element tag selection (`elementType`), and standard HTML attributes.
 */
export interface DividerProps
    extends React.ComponentPropsWithRef<typeof Separator> {}

/**
 * A thin horizontal or vertical line component implementing Material Design 3 Divider guidelines.
 *
 * Dividers separate, group, and structure content within lists and layouts. Built on top of
 * React Aria's {@link Separator}, it ensures correct accessibility roles (`role="separator"`,
 * `aria-orientation`) and adapts dynamically to configurable CSS tokens (`--md-divider-color`).
 *
 * @example
 * ```tsx
 * import { Divider } from '@adgytec/web-ui-components';
 *
 * // Standard horizontal divider
 * <Divider />
 *
 * // Vertical separator between inline elements
 * <div style={{ display: 'flex', height: '24px', alignItems: 'center' }}>
 *     <span>Left Item</span>
 *     <Divider orientation="vertical" />
 *     <span>Right Item</span>
 * </div>
 * ```
 */
export const Divider: React.FC<DividerProps> = ({ className, ...props }) => {
    return (
        <Separator
            className={clsx(styles["divider"], className)}
            {...props}
            data-divider
        />
    );
};
