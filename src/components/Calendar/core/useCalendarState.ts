import { useContext } from "react";
import {
    CalendarStateContext,
    RangeCalendarStateContext,
} from "react-aria-components";

export function useCalendarState() {
    const calendarState = useContext(CalendarStateContext);
    const rangeCalendarState = useContext(RangeCalendarStateContext);
    const state = calendarState || rangeCalendarState || null;

    if (!state) {
        throw "BaseCalendar used outside Calendar or RangeCalendar component";
    }

    return state;
}
