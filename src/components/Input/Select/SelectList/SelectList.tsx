import { clsx } from "clsx";
import { ListBox } from "react-aria-components";
import {
    MenuBaseLayout,
    type MenuColor,
    type MenuLayout,
    MenuStyles,
    menuBaseColor,
    menuColorConfig,
    menuLayoutConfig,
} from "@/components/Menu";

/**
 * Props for the {@link SelectList} component.
 * Extends React Aria's `ListBox` props with menu color and layout configuration.
 */
export interface SelectListProps<T extends object>
    extends React.ComponentPropsWithRef<typeof ListBox<T>> {
    /** Visual color scheme for menu options. */
    color?: MenuColor;
    /** Density and layout configuration of list items. */
    menuLayout?: MenuLayout;
}

/**
 * The scrollable list of selectable options rendered within a {@link Select} or {@link ComboBox} popover.
 *
 * Implements Material Design 3 selection list styling, keyboard arrow navigation, and typeahead search.
 */
export const SelectList = <T extends object>({
    color = "standard",
    menuLayout = "standard",
    className,
    ...props
}: SelectListProps<T>) => {
    return (
        <ListBox
            className={(renderProps) =>
                clsx(
                    menuColorConfig(color),
                    menuBaseColor,
                    MenuBaseLayout,
                    menuLayoutConfig(menuLayout),
                    MenuStyles,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
