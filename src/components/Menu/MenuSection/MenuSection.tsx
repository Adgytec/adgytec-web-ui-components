import clsx from "clsx";
import { MenuSection as AriaMenuSection } from "react-aria-components";
import { MenuSectionStyles } from "../core";

/**
 * Props for the [`MenuSection`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuSection/MenuSection.tsx) component.
 */
export interface MenuSectionProps<T extends object>
    extends React.ComponentPropsWithRef<typeof AriaMenuSection<T>> {}

/**
 * Groups related menu items into logical sections within a [`Menu`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/Menu/Menu.tsx).
 *
 * Typically contains a [`MenuSectionHeader`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuSectionHeader/MenuSectionHeader.tsx)
 * and one or more [`MenuItem`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuItem/MenuItem.tsx) components.
 *
 * @example
 * ```tsx
 * import { MenuSection, MenuSectionHeader, MenuItem } from "@adgytec/web-ui-components";
 *
 * <MenuSection>
 *     <MenuSectionHeader>Document Actions</MenuSectionHeader>
 *     <MenuItem label="Print" />
 *     <MenuItem label="Export as PDF" />
 * </MenuSection>
 * ```
 */
export const MenuSection = <T extends object>({
    className,
    ...props
}: MenuSectionProps<T>) => {
    return (
        <AriaMenuSection
            className={clsx(MenuSectionStyles, className)}
            {...props}
            data-menu-section
        />
    );
};
