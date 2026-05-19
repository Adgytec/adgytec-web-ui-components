import clsx from "clsx";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { useDateFormatter } from "react-aria";
import {
    CalendarStateContext,
    RangeCalendarStateContext,
} from "react-aria-components";
import { Button, IconButton } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { CalendarGrid } from "../CalendarGrid";
import type { MonthItem, WeekdayStyle } from "../core";
import styles from "./baseCalendar.module.css";

export const BaseCalendar: React.FC<{
    isRangeCalendar?: boolean;
    weekdayStyle?: WeekdayStyle;
}> = ({ isRangeCalendar, weekdayStyle }) => {
    const calendarState = useContext(CalendarStateContext);
    const rangeCalendarState = useContext(RangeCalendarStateContext);
    const state = calendarState || rangeCalendarState || null;

    if (!state) {
        throw "BaseCalendar used outside Calendar or RangeCalendar component";
    }

    const monthFormatter = useDateFormatter({
        month: "short",
        timeZone: state.timeZone,
    });

    const yearFormatter = useDateFormatter({
        year: "numeric",
        timeZone: state.timeZone,
    });

    const focusedMonth = monthFormatter.format(
        state.focusedDate.toDate(state.timeZone)
    );

    const focusedYear = yearFormatter.format(
        state.focusedDate.toDate(state.timeZone)
    );

    const months: MonthItem[] = [];
    const numMonths = state.focusedDate.calendar.getMonthsInYear(
        state.focusedDate
    );

    for (let i = 1; i <= numMonths; i++) {
        const date = state.focusedDate.set({ month: i });
        months.push({
            id: i,
            date,
            formatted: monthFormatter.format(date.toDate(state.timeZone)),
        });
    }

    return (
        <>
            <header className={clsx(styles["header"])}>
                <div className={clsx(styles["options"])}>
                    <IconButton
                        slot="previous"
                        icon={ChevronLeft}
                        color="standard"
                        size="extra-small"
                    />

                    <Button
                        slot={null}
                        color="text"
                        shape="square"
                        size="extra-small"
                        className={clsx(styles["selection"])}
                    >
                        {focusedMonth}
                        <Icon icon={ChevronDown} size={18} />
                    </Button>

                    <IconButton
                        slot="next"
                        icon={ChevronRight}
                        color="standard"
                        size="extra-small"
                    />
                </div>

                <div className={clsx(styles["options"])}>
                    <IconButton
                        slot="previous"
                        icon={ChevronLeft}
                        color="standard"
                        size="extra-small"
                    />

                    <Button
                        slot={null}
                        color="text"
                        shape="square"
                        size="extra-small"
                        className={clsx(styles["selection"])}
                    >
                        {focusedYear}
                        <Icon icon={ChevronDown} size={18} />
                    </Button>

                    <IconButton
                        slot="next"
                        icon={ChevronRight}
                        color="standard"
                        size="extra-small"
                    />
                </div>
            </header>

            <CalendarGrid
                weekdayStyle={weekdayStyle}
                isRangeCalendar={isRangeCalendar}
            />
        </>
    );
};
