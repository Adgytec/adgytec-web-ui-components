import clsx from "clsx";
import type { ReactNode } from "react";
import { typography } from "@/utils";
import styles from "./themeSelector.module.css";

export const ThemeItem = ({
    heading,
    description,
    children,
}: {
    heading: string;
    description?: string;
    children: ReactNode;
}) => {
    return (
        <div className={clsx(styles["theme-item"])}>
            <h3 className={clsx(typography.titleMediumEmphasized)}>
                {heading}
            </h3>

            {description && (
                <p className={clsx(typography.bodyMedium)}>{description}</p>
            )}

            {children}
        </div>
    );
};
