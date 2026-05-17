import clsx from "clsx";
import type { ReactNode } from "react";
import { typography } from "@/utils";
import styles from "./themeSelector.module.css";

export const ThemeItem = ({
    heading,
    description,
    children,
    className,
    useInline = false,
}: {
    heading: string;
    description?: string;
    children?: ReactNode;
    className?: string;
    useInline?: boolean;
}) => {
    if (useInline) {
        return (
            <span className={clsx(styles["theme-item"], className)}>
                <span className={clsx(styles["theme-item-info"])}>
                    <span className={clsx(typography.titleMedium)} slot="label">
                        {heading}
                    </span>

                    {description && (
                        <span
                            className={clsx(typography.bodyMedium)}
                            slot="description"
                        >
                            {description}
                        </span>
                    )}
                </span>

                {children}
            </span>
        );
    }
    return (
        <div className={clsx(styles["theme-item"], className)}>
            <div className={clsx(styles["theme-item-info"])}>
                <h3 className={clsx(typography.titleMedium)}>{heading}</h3>

                {description && (
                    <p className={clsx(typography.bodyMedium)}>{description}</p>
                )}
            </div>

            {children}
        </div>
    );
};
