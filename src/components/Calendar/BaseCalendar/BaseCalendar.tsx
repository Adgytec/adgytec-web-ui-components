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

    const calendarState = useCalendarState();
    const timeZone = calendarState.timeZone;

    const monthFormatter = useDateFormatter({
        month: "short",
        timeZone: timeZone,
    });
    const yearFormatter = useDateFormatter({
        year: "numeric",
        timeZone: timeZone,
    });

    const focusedMonth = monthFormatter.format(
        calendarState.focusedDate.toDate(timeZone)
    );
    const focusedYear = yearFormatter.format(
        calendarState.focusedDate.toDate(timeZone)
    );

    // create year menu items
    const currentYear = new Date().getFullYear();

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
        const monthFormatter = new Intl.DateTimeFormat(undefined, {
            month: "long",
            timeZone,
        });

        const items: MonthItem[] = [];

        const numMonths = calendarState.focusedDate.calendar.getMonthsInYear(
            calendarState.focusedDate
        );

        for (let month = 1; month <= numMonths; month++) {
            const date = calendarState.focusedDate.set({ month });

            items.push({
                id: month,
                formatted: monthFormatter.format(date.toDate(timeZone)),
            });
        }

        return items;
    }, [calendarState.focusedDate.calendar, timeZone]);

    return (
        <ButtonContext
            value={{
                slots: {
                    "previous-month": {
                        onPress: () => {
                            const newDate = calendarState.focusedDate.add({
                                months: -1,
                            });
                            calendarState.setFocusedDate(newDate);
                        },
                        isDisabled:
                            calendarState.isDisabled || view !== "calendar",
                    },
                    "next-month": {
                        onPress: () => {
                            const newDate = calendarState.focusedDate.add({
                                months: 1,
                            });
                            calendarState.setFocusedDate(newDate);
                        },
                        isDisabled:
                            calendarState.isDisabled || view !== "calendar",
                    },
                    "month-view": {
                        onPress: () =>
                            setView((prev) => {
                                if (prev === "month") return "calendar";
                                return "month";
                            }),
                        isDisabled: calendarState.isDisabled || view === "year",
                    },

                    "previous-year": {
                        onPress: () => {
                            const newDate = calendarState.focusedDate.add({
                                years: -1,
                            });
                            calendarState.setFocusedDate(newDate);
                        },
                        isDisabled:
                            calendarState.isDisabled || view !== "calendar",
                    },
                    "next-year": {
                        onPress: () => {
                            const newDate = calendarState.focusedDate.add({
                                years: 1,
                            });
                            calendarState.setFocusedDate(newDate);
                        },
                        isDisabled:
                            calendarState.isDisabled || view !== "calendar",
                    },
                    "year-view": {
                        onPress: () =>
                            setView((prev) => {
                                if (prev === "year") return "calendar";
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
                                    onSelection={() => setView("calendar")}
                                    months={months}
                                />
                            )}

                            {view === "year" && (
                                <CalendarYearMenu
                                    onSelection={() => setView("calendar")}
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
