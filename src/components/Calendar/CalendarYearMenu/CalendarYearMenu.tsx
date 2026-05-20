import { Check } from "lucide-react";
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
    years: YearItem[];
}> = ({ onSelection, years }) => {
    const state = useCalendarState();

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
                            state.setFocusedDate(
                                state.focusedDate.set({ year: item.id })
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
