import type { CSSProperties, ReactNode } from "react";
import type { Toolbar } from "react-aria-components";
import type { ButtonSize, SplitButtonColor } from "../../core";

/**
 * Props for the {@link SplitButton} container component.
 * Extends React Aria's {@link Toolbar} props with split button styling and shared state.
 */
export interface SplitButtonProps
    extends Omit<
        React.ComponentPropsWithRef<typeof Toolbar>,
        "orientation" | "children" | "className" | "style"
    > {
    /**
     * Visual color style variant applied to both primary and trigger buttons.
     *
     * @default "filled"
     */
    color?: SplitButtonColor;
    /**
     * Size preset applied to both primary and trigger buttons.
     *
     * @default "small"
     */
    size?: ButtonSize;

    /**
     * Global loading state applied to both primary and trigger buttons.
     */
    isPending?: boolean;
    /**
     * Global disabled state applied to both primary and trigger buttons.
     */
    isDisabled?: boolean;

    /** Primary button and menu trigger components. */
    children?: ReactNode;
    /** Optional CSS class name for the container element. */
    className?: string;
    /** Optional inline styles for the container element. */
    style?: CSSProperties;
}
