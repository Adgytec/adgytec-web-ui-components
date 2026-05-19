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
import { useCalendarState, type YearItem } from "../core";

export const CalendarYearMenu: React.FC<{
    onSelection: () => void;
}> = ({ onSelection }) => {
    const state = useCalendarState();

    const formatter = useDateFormatter({
        year: "numeric",
        timeZone: state.timeZone,
    });

    const currentYear = new Date().getFullYear();

    const minYear = state.minValue?.year ?? 1900;

    const maxYear = state.maxValue?.year ?? currentYear + 100;

    const years: YearItem[] = [];

    for (let year = minYear; year <= maxYear; year++) {
        const date = state.focusedDate.set({
            year,
        });

        years.push({
            id: year,
            date,
            formatted: formatter.format(date.toDate(state.timeZone)),
        });
    }

    return (
        <Virtualizer layout={ListLayout}>
            <ListBox
                autoFocus
                data-menu
                items={years}
                selectionMode="single"
                selectedKeys={new Set([state.focusedDate.year])}
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
