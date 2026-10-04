import { type CalendarDate, today } from "@internationalized/date";
import clsx from "clsx";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { useDateFormatter } from "react-aria";
import { ButtonContext } from "react-aria-components";
import { Transition } from "react-transition-group";
import { Button, IconButton } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { CalendarGrid } from "../CalendarGrid";
import { CalendarMonthMenu } from "../CalendarMonthMenu";
import { CalendarYearMenu } from "../CalendarYearMenu";
import {
    defaultMaxYearIncrement,
    defaultMinYear,
    isRangeCalendarState,
    type MonthItem,
    useCalendarState,
    type WeekdayStyle,
    type YearItem,
} from "../core";
import styles from "./baseCalendar.module.css";

/**
 * Internal view mode for the calendar component.
 *
 * - `"calendar"`: The standard 7-column date grid.
 * - `"month"`: Month selector menu.
 * - `"year"`: Year selector menu.
 */
type View = "calendar" | "month" | "year";

/**
 * Props for the {@link BaseCalendar} component.
 */
export interface BaseCalendarProps {
    /** Whether the calendar is operating in range selection mode. */
    isRangeCalendar?: boolean;

    /** Formatting style for weekday column headers. */
    weekdayStyle?: WeekdayStyle;

    /** Accessible label for the previous month button. */
    previousMonthAriaLabel?: string;

    /** Accessible label for the next month button. */
    nextMonthAriaLabel?: string;

    /** Accessible label for the previous year button. */
    previousYearAriaLabel?: string;

    /** Accessible label for the next year button. */
    nextYearAriaLabel?: string;
}

/**
 * Core calendar layout and view orchestrator.
 *
 * Manages the calendar header with navigation controls (prev/next month, prev/next year,
 * month/year dropdown buttons), animated transitions between grid, month, and year views,
 * and maintains anchor date state during view changes in range selection mode.
 */
export const BaseCalendar: React.FC<BaseCalendarProps> = ({
    isRangeCalendar,
    weekdayStyle,
    previousMonthAriaLabel,
    nextMonthAriaLabel,
    previousYearAriaLabel,
    nextYearAriaLabel,
}) => {
    const [view, setView] = useState<View>("calendar");

    const calendarRef = useRef<HTMLDivElement>(null);
    const monthRef = useRef<HTMLDivElement>(null);
    const yearRef = useRef<HTMLDivElement>(null);

    // fixes menu selection issue in range calendar
    const anchorDate = useRef<CalendarDate | null>(null);

    const calendarState = useCalendarState();
    const timeZone = calendarState.timeZone;

    const monthShortFormatter = useDateFormatter({
        month: "short",
        timeZone: timeZone,
    });
    const monthLongFormatter = useDateFormatter({
        month: "long",
        timeZone,
    });
    const yearFormatter = useDateFormatter({
        year: "numeric",
        timeZone: timeZone,
    });

    const focusedMonth = monthShortFormatter.format(
        calendarState.focusedDate.toDate(timeZone)
    );
    const focusedYear = yearFormatter.format(
        calendarState.focusedDate.toDate(timeZone)
    );

    // create year menu items
    const currentYear = today(timeZone).year;

    const minYear = calendarState.minValue?.year ?? defaultMinYear;
    const maxYear =
        calendarState.maxValue?.year ?? currentYear + defaultMaxYearIncrement;

    // biome-ignore lint/correctness/useExhaustiveDependencies: focusedDate month/day changes do not affect rendered year labels
    const years = useMemo(() => {
        const items: YearItem[] = [];

        for (let year = minYear; year <= maxYear; year++) {
            const date = calendarState.focusedDate.set({ year });

            items.push({
                id: year,
                formatted: yearFormatter.format(date.toDate(timeZone)),
            });
        }

        return items;
    }, [minYear, maxYear, timeZone, yearFormatter]);

    // create month menu items
    // biome-ignore lint/correctness/useExhaustiveDependencies: focusedDate month/day changes do not affect generated month items
    const months = useMemo(() => {
        const items: MonthItem[] = [];

        const numMonths = calendarState.focusedDate.calendar.getMonthsInYear(
            calendarState.focusedDate
        );

        for (let month = 1; month <= numMonths; month++) {
            const date = calendarState.focusedDate.set({ month });

            items.push({
                id: month,
                formatted: monthLongFormatter.format(date.toDate(timeZone)),
            });
        }

        return items;
    }, [calendarState.focusedDate.calendar, timeZone, monthLongFormatter]);

    /**
     * Determines whether an entire year falls completely outside the allowable
     * date range bounded by `minValue` and `maxValue`.
     *
     * @param date - A calendar date representing the year to evaluate.
     * @returns `true` if every date in the year is invalid, otherwise `false`.
     */
    const isYearInvalid = (date: CalendarDate) => {
        const startOfYear = date.set({ month: 1, day: 1 });

        const lastMonth = date.calendar.getMonthsInYear(date);
        const endOfYear = date.set({
            month: lastMonth,
            day: date.calendar.getDaysInMonth(date.set({ month: lastMonth })),
        });

        return (
            (calendarState.maxValue != null &&
                startOfYear.compare(calendarState.maxValue) > 0) ||
            (calendarState.minValue != null &&
                endOfYear.compare(calendarState.minValue) < 0)
        );
    };

    /** Checks whether navigating to the next year would land on a completely invalid year. */
    const nextYearIsInvalid = () => {
        return isYearInvalid(calendarState.focusedDate.cycle("year", 1));
    };

    /** Checks whether navigating to the previous year would land on a completely invalid year. */
    const prevYearIsInvalid = () => {
        return isYearInvalid(calendarState.focusedDate.cycle("year", -1));
    };

    /**
     * Preserves the active selection anchor date when navigating to month or year views
     * in a range calendar, clearing it temporarily to avoid unintended range expansions.
     */
    const saveAnchorDateForRangeCalendar = () => {
        if (!isRangeCalendarState(calendarState)) return;

        anchorDate.current = calendarState.anchorDate;
        calendarState.setAnchorDate(null);
    };

    /**
     * Restores the saved selection anchor date upon returning from month or year views
     * in a range calendar.
     */
    const restoreAnchorDateForRangeCalendar = () => {
        if (!isRangeCalendarState(calendarState)) return;

        calendarState.setAnchorDate(anchorDate.current);
        anchorDate.current = null;
    };

    /** Handles closing the month/year selection menu and returning to the calendar grid. */
    const menuItemOnSelection = () => {
        setView("calendar");
        restoreAnchorDateForRangeCalendar();
    };

    return (
        <ButtonContext
            value={{
                slots: {
                    "previous-month": {
                        "aria-label": previousMonthAriaLabel,
                        onPress: () => calendarState.focusPreviousPage(),
                        isDisabled:
                            calendarState.isDisabled ||
                            view !== "calendar" ||
                            calendarState.isPreviousVisibleRangeInvalid(),
                    },
                    "next-month": {
                        "aria-label": nextMonthAriaLabel,
                        onPress: () => calendarState.focusNextPage(),
                        isDisabled:
                            calendarState.isDisabled ||
                            view !== "calendar" ||
                            calendarState.isNextVisibleRangeInvalid(),
                    },
                    "month-view": {
                        "aria-expanded": view === "month",
                        onPress: () => {
                            if (view === "month") {
                                restoreAnchorDateForRangeCalendar();
                                setView("calendar");
                                return;
                            }

                            saveAnchorDateForRangeCalendar();
                            setView("month");
                        },
                        isDisabled: calendarState.isDisabled || view === "year",
                        isPressed: view === "month",
                    },

                    "previous-year": {
                        "aria-label": previousYearAriaLabel,
                        onPress: () => {
                            calendarState.setFocusedDate(
                                calendarState.focusedDate.cycle("year", -1)
                            );
                        },
                        isDisabled:
                            calendarState.isDisabled ||
                            view !== "calendar" ||
                            prevYearIsInvalid(),
                    },
                    "next-year": {
                        "aria-label": nextYearAriaLabel,
                        onPress: () => {
                            calendarState.setFocusedDate(
                                calendarState.focusedDate.cycle("year", 1)
                            );
                        },
                        isDisabled:
                            calendarState.isDisabled ||
                            view !== "calendar" ||
                            nextYearIsInvalid(),
                    },
                    "year-view": {
                        "aria-expanded": view === "year",
                        onPress: () => {
                            if (view === "year") {
                                restoreAnchorDateForRangeCalendar();
                                setView("calendar");
                                return;
                            }

                            saveAnchorDateForRangeCalendar();
                            setView("year");
                        },
                        isDisabled:
                            calendarState.isDisabled || view === "month",
                        isPressed: view === "year",
                    },
                },
            }}
        >
            <header className={clsx(styles["header"])}>
                <div className={clsx(styles["options"])}>
                    <IconButton
                        slot="previous-month"
                        icon={ChevronLeft}
                        color="standard"
                        size="extra-small"
                    />

                    <Button
                        slot="month-view"
                        color="text"
                        shape="square"
                        size="extra-small"
                        className={clsx(styles["selection"])}
                    >
                        {focusedMonth}
                        <Icon icon={ChevronDown} size={18} />
                    </Button>

                    <IconButton
                        slot="next-month"
                        icon={ChevronRight}
                        color="standard"
                        size="extra-small"
                    />
                </div>

                <div className={clsx(styles["options"])}>
                    <IconButton
                        slot="previous-year"
                        icon={ChevronLeft}
                        color="standard"
                        size="extra-small"
                    />

                    <Button
                        slot="year-view"
                        color="text"
                        shape="square"
                        size="extra-small"
                        className={clsx(styles["selection"])}
                    >
                        {focusedYear}
                        <Icon icon={ChevronDown} size={18} />
                    </Button>

                    <IconButton
                        slot="next-year"
                        icon={ChevronRight}
                        color="standard"
                        size="extra-small"
                    />
                </div>
            </header>

            <div className={clsx(styles["view"])}>
                <Transition
                    nodeRef={calendarRef}
                    timeout={{
                        enter: 0,
                        exit: 150,
                    }}
                    mountOnEnter
                    unmountOnExit
                    in={view === "calendar"}
                >
                    {(state) => (
                        <div
                            ref={calendarRef}
                            className={clsx(styles["menu"])}
                            data-state={state}
                        >
                            <CalendarGrid
                                weekdayStyle={weekdayStyle}
                                isRangeCalendar={isRangeCalendar}
                            />
                        </div>
                    )}
                </Transition>

                <Transition
                    nodeRef={monthRef}
                    timeout={{
                        enter: 0,
                        exit: 150,
                    }}
                    mountOnEnter
                    unmountOnExit
                    in={view === "month"}
                >
                    {(state) => (
                        <div
                            ref={monthRef}
                            className={clsx(styles["menu"])}
                            data-state={state}
                        >
                            <CalendarMonthMenu
                                onSelection={menuItemOnSelection}
                                months={months}
                            />
                        </div>
                    )}
                </Transition>

                <Transition
                    nodeRef={yearRef}
                    timeout={{
                        enter: 0,
                        exit: 150,
                    }}
                    mountOnEnter
                    unmountOnExit
                    in={view === "year"}
                >
                    {(state) => (
                        <div
                            ref={yearRef}
                            className={clsx(styles["menu"])}
                            data-state={state}
                        >
                            <CalendarYearMenu
                                onSelection={menuItemOnSelection}
                                years={years}
                            />
                        </div>
                    )}
                </Transition>
            </div>
        </ButtonContext>
    );
};
