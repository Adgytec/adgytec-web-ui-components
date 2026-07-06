import { useContext } from "react";
import {
    type CalendarState,
    CalendarStateContext,
    type RangeCalendarState,
    RangeCalendarStateContext,
} from "react-aria-components";
import type { CalendarSelectionMode } from "react-aria-components/Calendar";

export function useCalendarState() {
    const calendarState = useContext(CalendarStateContext);
    const rangeCalendarState = useContext(RangeCalendarStateContext);
    const state = calendarState || rangeCalendarState || null;

    if (!state) {
        throw Error(
            "BaseCalendar used outside Calendar or RangeCalendar component"
        );
    }

    return state;
}

export function isRangeCalendarState(
    state: CalendarState<CalendarSelectionMode> | RangeCalendarState
): state is RangeCalendarState {
    return "anchorDate" in state;
}
