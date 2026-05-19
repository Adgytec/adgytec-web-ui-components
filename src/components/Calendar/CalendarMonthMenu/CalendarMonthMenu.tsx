import { useDateFormatter } from "react-aria";
import {
    ListBox,
    ListBoxItem,
    SelectionIndicator,
} from "react-aria-components";
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
        <div data-menu>
            <ListBox
                items={months}
                selectionMode="single"
                selectionBehavior="replace"
                selectedKeys={new Set([state.focusedDate.month])}
                onSelectionChange={(keys) => {
                    const key = [...keys][0];
                    if (key == null) return;

                    const month = months.find((m) => m.id === key);
                    if (!month) return;

                    state.setFocusedDate(month.date);
                    onSelection();
                }}
            >
                {(item) => (
                    <ListBoxItem>
                        {({ isSelected }) => (
                            <>
                                {item.formatted}
                                {isSelected && (
                                    <SelectionIndicator
                                        style={{
                                            display: "block",
                                            width: 8,
                                            height: 8,
                                            background: "red",
                                            borderRadius: 999,
                                        }}
                                        isSelected={isSelected}
                                    >
                                        Selected
                                    </SelectionIndicator>
                                )}
                            </>
                        )}
                    </ListBoxItem>
                )}
            </ListBox>
        </div>
    );
};
