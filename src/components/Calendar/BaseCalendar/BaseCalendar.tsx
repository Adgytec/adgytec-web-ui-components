import clsx from "clsx";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { useDateFormatter } from "react-aria";
import {
    CalendarStateContext,
    RangeCalendarStateContext,
} from "react-aria-components";
import { Button, IconButton } from "@/components/Button";
import { CalendarGrid } from "../CalendarGrid";
import { CalendarHeaderStyles, type WeekdayStyle } from "../core";

export const BaseCalendar: React.FC<{
    isRangeCalendar?: boolean;
    weekdayStyle?: WeekdayStyle;
}> = ({ isRangeCalendar, weekdayStyle }) => {
    const calendarState = useContext(CalendarStateContext);
    const rangeCalendarState = useContext(RangeCalendarStateContext);
    const state = calendarState || rangeCalendarState || null;

    const monthFormatter = useDateFormatter({
        month: "short",
        timeZone: state?.timeZone,
    });

    const yearFormatter = useDateFormatter({
        year: "numeric",
        timeZone: state?.timeZone,
    });

    if (!state) {
        throw "BaseCalendar used outside Calendar or RangeCalendar component";
    }

    const focusedMonth = monthFormatter.format(
        state.focusedDate.toDate(state.timeZone)
    );

    const focusedYear = yearFormatter.format(
        state.focusedDate.toDate(state.timeZone)
    );

    return (
        <>
            <header className={clsx(CalendarHeaderStyles)}>
                <IconButton
                    slot="previous"
                    icon={ChevronLeft}
                    color="standard"
                    size="extra-small"
                />

                <Button
                    slot={null}
                    color="text"
                    iconPlacement="end"
                    icon={ChevronDown}
                    shape="square"
                    size="extra-small"
                >
                    {`${focusedMonth} ${focusedYear}`}
                </Button>

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
