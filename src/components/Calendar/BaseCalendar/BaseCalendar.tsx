import clsx from "clsx";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useContext, useRef, useState } from "react";
import { useDateFormatter } from "react-aria";
import {
    ButtonContext,
    CalendarStateContext,
    RangeCalendarStateContext,
} from "react-aria-components";
import { SwitchTransition, Transition } from "react-transition-group";
import { Button, IconButton } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { CalendarGrid } from "../CalendarGrid";
import { CalendarMonthMenu } from "../CalendarMonthMenu";
import { CalendarYearMenu } from "../CalendarYearMenu";
import type { MonthItem, WeekdayStyle } from "../core";
import styles from "./baseCalendar.module.css";

type View = "calendar" | "month" | "year";

export const BaseCalendar: React.FC<{
    isRangeCalendar?: boolean;
    weekdayStyle?: WeekdayStyle;
}> = ({ isRangeCalendar, weekdayStyle }) => {
    const [view, setView] = useState<View>("calendar");
    const nodeRef = useRef<HTMLDivElement>(null);

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
        <ButtonContext
            value={{
                slots: {
                    "previous-month": {
                        isDisabled: state.isDisabled,
                    },
                    "next-month": {
                        isDisabled: state.isDisabled,
                    },
                    "month-view": {
                        onPress: () =>
                            setView((prev) => {
                                if (prev === "month") return "calendar";
                                return "month";
                            }),
                        isDisabled: state.isDisabled,
                    },

                    "previous-year": {
                        isDisabled: state.isDisabled,
                    },
                    "next-year": {
                        isDisabled: state.isDisabled,
                    },
                    "year-view": {
                        onPress: () =>
                            setView((prev) => {
                                if (prev === "year") return "calendar";
                                return "year";
                            }),
                        isDisabled: state.isDisabled,
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

            <SwitchTransition mode="out-in">
                <Transition key={view} nodeRef={nodeRef} timeout={200}>
                    {(state) => (
                        <div
                            ref={nodeRef}
                            className={clsx(styles["view"])}
                            data-entering={state === "entering" || undefined}
                            data-exiting={state === "exiting" || undefined}
                            data-entered={state === "entered" || undefined}
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
                                />
                            )}

                            {view === "year" && (
                                <CalendarYearMenu
                                    onSelection={() => setView("calendar")}
                                />
                            )}
                        </div>
                    )}
                </Transition>
            </SwitchTransition>
        </ButtonContext>
    );
};
