import clsx from "clsx";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { useDateFormatter } from "react-aria";
import {
    CalendarStateContext,
    RangeCalendarStateContext,
} from "react-aria-components";
import { Button, IconButton } from "@/components/Button";
import {
    Select,
    SelectItem,
    SelectList,
    SelectPopover,
} from "@/components/Input";
import { CalendarGrid } from "../CalendarGrid";
import {
    CalendarHeaderStyles,
    type MonthItem,
    type WeekdayStyle,
} from "../core";
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
        month: "long",
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
            <header className={clsx(CalendarHeaderStyles)}>
                <IconButton
                    slot="previous"
                    icon={ChevronLeft}
                    color="standard"
                    size="extra-small"
                />

                <Select
                    value={state.focusedDate.month}
                    onChange={(key) => {
                        if (typeof key === "number") {
                            state.setFocusedDate(months[key - 1].date);
                        }
                    }}
                >
                    <Button
                        color="text"
                        iconPlacement="end"
                        icon={ChevronDown}
                        shape="square"
                        size="extra-small"
                        className={clsx(styles["selection"])}
                    >
                        {`${focusedMonth} ${focusedYear}`}
                    </Button>

                    <SelectPopover>
                        <SelectList items={months}>
                            {(item) => <SelectItem label={item.formatted} />}
                        </SelectList>
                    </SelectPopover>
                </Select>

                <IconButton
                    slot="next"
                    icon={ChevronRight}
                    color="standard"
                    size="extra-small"
                />
            </header>

            <CalendarGrid
                weekdayStyle={weekdayStyle}
                isRangeCalendar={isRangeCalendar}
            />
        </>
    );
};
