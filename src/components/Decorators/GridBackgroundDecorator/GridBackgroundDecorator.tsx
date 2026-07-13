import clsx from "clsx";
import type React from "react";
import styles from "./gridBackgroundDecorator.module.css";

export interface GridBackgroundDecoratorProps {
    /** Custom z-index value. Defaults to 0 */
    zIndex?: number;
    /** Additional CSS classes */
    className?: string;
    /** Additional custom styles */
    style?: React.CSSProperties;
    /** Grid size in pixels. Defaults to 40 */
    gridSize?: number;
    /** Grid pattern variant. Defaults to 'lines' */
    variant?: "lines" | "dots";
}

export const GridBackgroundDecorator = ({
    zIndex = 0,
    className,
    style,
    gridSize = 40,
    variant = "lines",
}: GridBackgroundDecoratorProps) => {
    return (
        <div
            className={clsx(styles["container"], className)}
            aria-hidden="true"
            data-variant={variant}
            style={
                {
                    zIndex,
                    "--grid-size": `${gridSize}px`,
                    ...style,
                } as React.CSSProperties
            }
        />
    );
};
