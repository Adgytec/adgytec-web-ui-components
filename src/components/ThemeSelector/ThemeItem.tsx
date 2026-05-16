import clsx from "clsx";
import type { ReactNode } from "react";
import { typography } from "@/utils";
import styles from "./themeSelector.module.css";

export const ThemeItem = ({
    heading,
    description,
    children,
    className,
}: {
    heading: string;
    description?: string;
    children: ReactNode;
    className?: string;
}) => {
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
