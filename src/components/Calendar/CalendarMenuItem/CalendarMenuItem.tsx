import clsx from "clsx";
import { ListBoxItem } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./calendarMenuItem.module.css";

/**
 * Props for the {@link CalendarMenuItem} component.
 * Extends React Aria's {@link ListBoxItem} props.
 */
export interface CalendarMenuItemProps
    extends React.ComponentPropsWithRef<typeof ListBoxItem> {}

/**
 * An individual selectable item within the calendar month and year picker menus.
 *
 * Implements Material Design 3 selection styles, focus outlines, and typography.
 */
export const CalendarMenuItem: React.FC<CalendarMenuItemProps> = ({
    className,
    ...props
}) => {
    return (
        <ListBoxItem
            className={(renderProps) =>
                clsx(
                    styles["item"],
                    typography.bodyLarge,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
