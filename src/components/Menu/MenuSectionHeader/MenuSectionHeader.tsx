import clsx from "clsx";
import { Header } from "react-aria-components";
import { typography } from "@/utils";
import { MenuSectionHeaderStyles } from "../core";

/**
 * Props for the [`MenuSectionHeader`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuSectionHeader/MenuSectionHeader.tsx) component.
 */
export interface MenuSectionHeaderProps
    extends React.ComponentPropsWithRef<"header"> {}

/**
 * Section header title rendered at the top of a [`MenuSection`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Menu/MenuSection/MenuSection.tsx).
 *
 * Styled with Material Design 3 `labelLarge` typography and accessible section header semantics.
 *
 * @example
 * ```tsx
 * <MenuSectionHeader>Preferences</MenuSectionHeader>
 * ```
 */
export const MenuSectionHeader: React.FC<MenuSectionHeaderProps> = ({
    className,
    ...props
}) => {
    return (
        <Header
            className={clsx(
                typography.labelLarge,
                MenuSectionHeaderStyles,
                className
            )}
            {...props}
        />
    );
};
