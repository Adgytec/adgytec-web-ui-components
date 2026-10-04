import clsx from "clsx";
import {
    CalendarGrid as AriaCalendarGrid,
    CalendarGridBody,
    CalendarGridHeader,
    CalendarHeaderCell,
} from "react-aria-components";
import { typography } from "@/utils";
import { CalendarCell } from "../CalendarCell";
import styles from "./calendarGrid.module.css";

/**
 * Props for the {@link CalendarGrid} component.
 * Extends React Aria's `CalendarGrid` props (excluding `children` and `className`).
 */
export interface CalendarGridProps
    extends Omit<
        React.ComponentPropsWithRef<typeof AriaCalendarGrid>,
        "children" | "className"
    > {
    /** Whether the calendar is operating in range selection mode. */
    isRangeCalendar?: boolean;
}

/**
 * Renders the 7-column calendar date grid, including weekday column headers
 * and day date cells.
 */
export const CalendarGrid: React.FC<CalendarGridProps> = ({
    isRangeCalendar,
    ...props
}) => {
    return (
        <AriaCalendarGrid {...props} className={clsx(styles["grid"])}>
            <CalendarGridHeader className={clsx(styles["header"])}>
                {(day) => (
                    <CalendarHeaderCell
                        className={clsx(
                            styles["header-cell"],
                            typography.bodyLarge
                        )}
                    >
                        {day}
                    </CalendarHeaderCell>
                )}
            </CalendarGridHeader>

            <CalendarGridBody className={clsx(styles["body"])}>
                {(date) => (
                    <CalendarCell
                        isRangeCalendar={isRangeCalendar}
                        date={date}
                    />
                )}
            </CalendarGridBody>
        </AriaCalendarGrid>
    );
};
