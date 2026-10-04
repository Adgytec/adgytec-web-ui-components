import { clsx } from "clsx";
import { LoaderCircle } from "lucide-react";
import { Icon } from "../Icon";
import styles from "./loader.module.css";

/**
 * Props for the [`Loader`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Loader/Loader.tsx) component.
 *
 * Extends all properties from [`Icon`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Icon/Icon.tsx)
 * while omitting `icon` (which is fixed to `LoaderCircle`) and internal `className`.
 */
export interface LoaderProps
    extends Omit<
        React.ComponentPropsWithRef<typeof Icon>,
        "icon" | "className"
    > {}

/**
 * Circular spinning progress and activity indicator component.
 *
 * Built using Lucide's `LoaderCircle` icon with continuous 360-degree rotation animation
 * to signal ongoing processes or background loading operations.
 *
 * @example
 * ```tsx
 * import { Loader } from "@adgytec/web-ui-components";
 *
 * // Default loader
 * <Loader />
 *
 * // Custom size and color
 * <Loader size={32} color="var(--md-sys-color-primary)" />
 * ```
 */
export const Loader: React.FC<LoaderProps> = (props) => {
    return (
        <Icon
            icon={LoaderCircle}
            className={clsx(styles["loader"])}
            {...props}
        />
    );
};
