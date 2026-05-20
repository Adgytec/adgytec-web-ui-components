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
                selectedKeys={new Set([state.focusedDate.month])}
            >
                {(item) => (
                    <CalendarMenuItem
                        onPress={() => {
                            state.setFocusedDate(
                                state.focusedDate.set({ month: item.id })
                            );
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
