import { type CalendarDate, today } from "@internationalized/date";
import clsx from "clsx";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";
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
    const nodeRefs = {
        calendar: useRef<HTMLDivElement>(null),
        month: useRef<HTMLDivElement>(null),
        year: useRef<HTMLDivElement>(null),
    };
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

    const nextYearIsInvalid = () => {
        const nextYear = calendarState.focusedDate.cycle("year", 1);

        const startOfYear = nextYear.set({
            month: 1,
            day: 1,
        });

        const lastMonth = nextYear.calendar.getMonthsInYear(nextYear);
        const endOfYear = nextYear.set({
            month: lastMonth,
            day: nextYear.calendar.getDaysInMonth(
                nextYear.set({ month: lastMonth })
            ),
        });

        return (
            (calendarState.maxValue != null &&
                startOfYear.compare(calendarState.maxValue) > 0) ||
            (calendarState.minValue != null &&
                endOfYear.compare(calendarState.minValue) < 0)
        );
    };

    const prevYearIsInvalid = () => {
        const previousYear = calendarState.focusedDate.cycle("year", -1);

        const startOfYear = previousYear.set({
            month: 1,
            day: 1,
        });

        const lastMonth = previousYear.calendar.getMonthsInYear(previousYear);
        const endOfYear = previousYear.set({
            month: lastMonth,
            day: previousYear.calendar.getDaysInMonth(
                previousYear.set({ month: lastMonth })
            ),
        });

        return (
            (calendarState.maxValue != null &&
                startOfYear.compare(calendarState.maxValue) > 0) ||
            (calendarState.minValue != null &&
                endOfYear.compare(calendarState.minValue) < 0)
        );
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
                        onPress: () =>
                            setView((prev) => {
                                if (prev === "month") return "calendar";

                                saveAnchorDateForRangeCalendar();
                                return "month";
                            }),
                        isDisabled: calendarState.isDisabled || view === "year",
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
                        onPress: () =>
                            setView((prev) => {
                                if (prev === "year") return "calendar";

                                saveAnchorDateForRangeCalendar();
                                return "year";
                            }),
                        isDisabled:
                            calendarState.isDisabled || view === "month",
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
                        data-current={view === "month" || undefined}
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
                        data-current={view === "year" || undefined}
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

            <TransitionGroup>
                <Transition key={view} nodeRef={currentRef} timeout={150}>
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
