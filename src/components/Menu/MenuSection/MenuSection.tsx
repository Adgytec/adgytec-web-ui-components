import clsx from "clsx";
import {
    MenuSection as AriaMenuSection,
    type MenuSectionProps,
} from "react-aria-components";
import styles from "../styles/menu.module.css";

export const MenuSection = <T extends object>({
    className,
    ...props
}: MenuSectionProps<T>) => {
    return (
        <AriaMenuSection
            className={clsx(styles["menu-section"], className)}
            {...props}
        />
    );
};
