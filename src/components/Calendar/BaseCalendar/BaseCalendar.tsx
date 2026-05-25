import { type CalendarDate, today } from "@internationalized/date";
import clsx from "clsx";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { createRef, useMemo, useRef, useState } from "react";
import { useDateFormatter } from "react-aria";
import { ButtonContext } from "react-aria-components";
import { Transition, TransitionGroup } from "react-transition-group";
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

type View = "calendar" | "month" | "year";

export const BaseCalendar: React.FC<{
    isRangeCalendar?: boolean;
    weekdayStyle?: WeekdayStyle;
}> = ({ isRangeCalendar, weekdayStyle }) => {
    const [view, setView] = useState<View>("calendar");
    const nodeRefs = useRef({
        calendar: createRef<HTMLDivElement>(),
        month: createRef<HTMLDivElement>(),
        year: createRef<HTMLDivElement>(),
    }).current;
    const currentRef = nodeRefs[view];
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

    const nextYearIsInvalid = () => {
        return isYearInvalid(calendarState.focusedDate.cycle("year", 1));
    };

    const prevYearIsInvalid = () => {
        return isYearInvalid(calendarState.focusedDate.cycle("year", -1));
    };

    const saveAnchorDateForRangeCalendar = () => {
        if (!isRangeCalendarState(calendarState)) return;

        anchorDate.current = calendarState.anchorDate;
        calendarState.setAnchorDate(null);
    };

    const restoreAnchorDateForRangeCalendar = () => {
        if (!isRangeCalendarState(calendarState)) return;

        calendarState.setAnchorDate(anchorDate.current);
        anchorDate.current = null;
    };

    const menuItemOnSelection = () => {
        setView("calendar");
        restoreAnchorDateForRangeCalendar();
    };

    return (
        <ButtonContext
            value={{
                slots: {
                    "previous-month": {
                        onPress: () => calendarState.focusPreviousPage(),
                        isDisabled:
                            calendarState.isDisabled ||
                            view !== "calendar" ||
                            calendarState.isPreviousVisibleRangeInvalid(),
                    },
                    "next-month": {
                        onPress: () => calendarState.focusNextPage(),
                        isDisabled:
                            calendarState.isDisabled ||
                            view !== "calendar" ||
                            calendarState.isNextVisibleRangeInvalid(),
                    },
                    "month-view": {
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

            <TransitionGroup className={clsx(styles["transition-group"])}>
                <Transition
                    key={view}
                    nodeRef={currentRef}
                    timeout={150}
                    unmountOnExit
                >
                    {(transitionState) => (
                        <div
                            ref={currentRef}
                            className={clsx(styles["view"])}
                            data-entering={
                                transitionState === "entering" || undefined
                            }
                            data-exiting={
                                transitionState === "exiting" || undefined
                            }
                            data-entered={
                                transitionState === "entered" || undefined
                            }
                        >
                            {view === "calendar" && (
                                <CalendarGrid
                                    weekdayStyle={weekdayStyle}
                                    isRangeCalendar={isRangeCalendar}
                                />
                            )}

                            {view === "month" && (
                                <CalendarMonthMenu
                                    onSelection={menuItemOnSelection}
                                    months={months}
                                />
                            )}

                            {view === "year" && (
                                <CalendarYearMenu
                                    onSelection={menuItemOnSelection}
                                    years={years}
                                />
                            )}
                        </div>
                    )}
                </Transition>
            </TransitionGroup>
        </ButtonContext>
    );
};
