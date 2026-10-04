import { useContext } from "react";
import {
    type CalendarState,
    CalendarStateContext,
    type RangeCalendarState,
    RangeCalendarStateContext,
} from "react-aria-components";
import type { CalendarSelectionMode } from "react-aria-components/Calendar";

/**
 * Accesses the active calendar state from the nearest enclosing `Calendar` or `RangeCalendar`.
 *
 * Checks both {@link CalendarStateContext} (single date) and {@link RangeCalendarStateContext} (range).
 * Throws an error if invoked outside a valid calendar provider context.
 *
 * @returns The active {@link CalendarState} or {@link RangeCalendarState}.
 * @throws {Error} If called outside of a `Calendar` or `RangeCalendar` component hierarchy.
 */
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

/**
 * Type guard function to determine whether a given calendar state is a {@link RangeCalendarState}.
 *
 * @param state - The calendar state instance to check.
 * @returns `true` if `state` is a `RangeCalendarState` (containing an `anchorDate` property), otherwise `false`.
 */
export function isRangeCalendarState(
    state: CalendarState<CalendarSelectionMode> | RangeCalendarState
): state is RangeCalendarState {
    return "anchorDate" in state;
}
