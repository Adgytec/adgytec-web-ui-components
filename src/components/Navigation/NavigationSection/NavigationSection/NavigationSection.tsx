import clsx from "clsx";
import styles from "./navigationSection.module.css";

export const NavigationSection: React.FC<
    React.ComponentPropsWithRef<"section">
> = ({ className, ...props }) => {
    return (
        <section className={clsx(styles["section"], className)} {...props} />
    );
};
