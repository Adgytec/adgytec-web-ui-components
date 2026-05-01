import clsx from "clsx";
import {
    MenuSection as AriaMenuSection,
    type MenuSectionProps,
} from "react-aria-components";
import { MenuSectionStyles } from "../core";

export const MenuSection = <T extends object>({
    className,
    ...props
}: MenuSectionProps<T>) => {
    return (
        <AriaMenuSection
            className={clsx(MenuSectionStyles, className)}
            {...props}
        />
    );
};
