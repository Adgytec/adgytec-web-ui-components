import { Check } from "lucide-react";
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
    months: MonthItem[];
}> = ({ onSelection, months }) => {
    const state = useCalendarState();

    return (
        <Virtualizer layout={ListLayout}>
            <ListBox
                autoFocus
                data-menu
                items={months}
                selectionMode="single"
                selectedKeys={[state.focusedDate.month]}
            >
                {(item) => {
                    const nextDate = state.focusedDate.set({
                        month: item.id,
                        day: 1,
                    });

                    const endOfMonth = nextDate.set({
                        day: nextDate.calendar.getDaysInMonth(nextDate),
                    });

                    const monthCompletelyInvalid =
                        (state.maxValue &&
                            nextDate.compare(state.maxValue) > 0) ||
                        (state.minValue &&
                            endOfMonth.compare(state.minValue) < 0);

                    return (
                        <CalendarMenuItem
                            onPress={() => {
                                state.setFocusedDate(
                                    state.focusedDate.set({ month: item.id })
                                );
                                onSelection();
                            }}
                            isDisabled={monthCompletelyInvalid ?? undefined}
                        >
                            <SelectionIndicator>
                                <Icon
                                    icon={Check}
                                    size={24}
                                    data-selected-icon
                                />
                            </SelectionIndicator>
                            {item.formatted}
                        </CalendarMenuItem>
                    );
                }}
            </ListBox>
        </Virtualizer>
    );
};
