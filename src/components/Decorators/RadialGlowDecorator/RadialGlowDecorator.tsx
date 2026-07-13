import clsx from "clsx";
import type React from "react";
import styles from "./radialGlowDecorator.module.css";

export interface RadialGlowDecoratorProps {
    /** Custom z-index value. Defaults to -10 */
    zIndex?: number;
    /** Additional CSS classes */
    className?: string;
    /** Additional custom styles */
    style?: React.CSSProperties;
    /** Blob arrangement variant. Defaults to 'default' */
    variant?:
        | "default"
        | "split"
        | "top-bar"
        | "corners"
        | "aurora"
        | "spotlight"
        | "nebula"
        | "horizon"
        | "spiral";
}

export const RadialGlowDecorator = ({
    zIndex = -10,
    className,
    style,
    variant = "default",
}: RadialGlowDecoratorProps) => {
    return (
        <div
            className={clsx(styles["container"], className)}
            aria-hidden="true"
            data-variant={variant}
            style={{ zIndex, ...style }}
        >
            {variant === "default" && (
                <>
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["default-primary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["default-secondary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["default-tertiary"]
                        )}
                    />
                </>
            )}
            {variant === "split" && (
                <>
                    <div
                        className={clsx(styles["blob"], styles["split-left"])}
                    />
                    <div
                        className={clsx(styles["blob"], styles["split-right"])}
                    />
                </>
            )}
            {variant === "top-bar" && (
                <>
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["top-bar-primary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["top-bar-secondary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["top-bar-tertiary"]
                        )}
                    />
                </>
            )}
            {variant === "corners" && (
                <>
                    <div
                        className={clsx(styles["blob"], styles["corner-tl"])}
                    />
                    <div
                        className={clsx(styles["blob"], styles["corner-tr"])}
                    />
                    <div
                        className={clsx(styles["blob"], styles["corner-bl"])}
                    />
                    <div
                        className={clsx(styles["blob"], styles["corner-br"])}
                    />
                </>
            )}
            {variant === "aurora" && (
                <>
                    <div className={clsx(styles["blob"], styles["aurora-1"])} />
                    <div className={clsx(styles["blob"], styles["aurora-2"])} />
                    <div className={clsx(styles["blob"], styles["aurora-3"])} />
                    <div className={clsx(styles["blob"], styles["aurora-4"])} />
                </>
            )}
            {variant === "spotlight" && (
                <>
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["spotlight-primary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["spotlight-secondary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["spotlight-tertiary"]
                        )}
                    />
                </>
            )}
            {variant === "nebula" && (
                <>
                    <div className={clsx(styles["blob"], styles["nebula-1"])} />
                    <div className={clsx(styles["blob"], styles["nebula-2"])} />
                    <div className={clsx(styles["blob"], styles["nebula-3"])} />
                    <div className={clsx(styles["blob"], styles["nebula-4"])} />
                </>
            )}
            {variant === "horizon" && (
                <>
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["horizon-primary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["horizon-secondary"]
                        )}
                    />
                    <div
                        className={clsx(
                            styles["blob"],
                            styles["horizon-tertiary"]
                        )}
                    />
                </>
            )}
            {variant === "spiral" && (
                <>
                    <div className={clsx(styles["blob"], styles["spiral-1"])} />
                    <div className={clsx(styles["blob"], styles["spiral-2"])} />
                    <div className={clsx(styles["blob"], styles["spiral-3"])} />
                </>
            )}
        </div>
    );
};
