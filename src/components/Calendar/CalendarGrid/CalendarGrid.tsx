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

export const CalendarGrid: React.FC<
    Omit<
        React.ComponentPropsWithRef<typeof AriaCalendarGrid>,
        "children" | "className"
    > & { isRangeCalendar?: boolean }
> = ({ isRangeCalendar, ...props }) => {
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
