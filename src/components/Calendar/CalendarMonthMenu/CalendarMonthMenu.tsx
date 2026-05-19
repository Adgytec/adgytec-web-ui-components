import { Check } from "lucide-react";
import { useDateFormatter } from "react-aria";
import {
    ListBox,
    ListLayout,
    SelectionIndicator,
    Virtualizer,
} from "react-aria-components";
import { Icon } from "@/components/Icon";
import { CalendarMenuItem } from "../CalendarMenuItem";
import { type MonthItem, useCalendarState } from "../core";

export const CalendarMonthMenu: React.FC<{
    onSelection: () => void;
}> = ({ onSelection }) => {
    const state = useCalendarState();
    const formatter = useDateFormatter({
        month: "long",
        timeZone: state.timeZone,
    });

    const months: MonthItem[] = [];
    const numMonths = state.focusedDate.calendar.getMonthsInYear(
        state.focusedDate
    );

    for (let i = 1; i <= numMonths; i++) {
        const date = state.focusedDate.set({ month: i });
        months.push({
            id: i,
            date,
            formatted: formatter.format(date.toDate(state.timeZone)),
        });
    }

    return (
        <Virtualizer layout={ListLayout}>
            <ListBox
                autoFocus
                data-menu
                items={months}
                selectionMode="single"
                selectedKeys={new Set([state.focusedDate.month])}
            >
                {(item) => (
                    <CalendarMenuItem
                        onPress={() => {
                            state.setFocusedDate(item.date);
                            onSelection();
                        }}
                    >
                        <SelectionIndicator>
                            <Icon icon={Check} size={24} data-selected-icon />
                        </SelectionIndicator>
                        {item.formatted}
                    </CalendarMenuItem>
                )}
            </ListBox>
        </Virtualizer>
    );
};
