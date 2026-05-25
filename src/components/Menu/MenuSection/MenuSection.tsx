import clsx from "clsx";
import { MenuSection as AriaMenuSection } from "react-aria-components";
import { MenuSectionStyles } from "../core";

export const MenuSection = <T extends object>({
    className,
    ...props
}: React.ComponentPropsWithRef<typeof AriaMenuSection<T>>) => {
    return (
        <AriaMenuSection
            className={clsx(MenuSectionStyles, className)}
            {...props}
            data-menu-section
        />
    );
};
