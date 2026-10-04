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

/**
 * Props for the {@link CalendarYearMenu} component.
 */
export interface CalendarYearMenuProps {
    /** Callback invoked after a year item is selected to return to the calendar view. */
    onSelection: () => void;
    /** Array of selectable year objects to render in the virtualized list. */
    years: YearItem[];
}

/**
 * A virtualized list menu allowing users to quickly pick a year in the calendar.
 *
 * Automatically highlights the currently focused year with a checkmark and shifts the focused date
 * on selection.
 */
export const CalendarYearMenu: React.FC<CalendarYearMenuProps> = ({
    onSelection,
    years,
}) => {
    const state = useCalendarState();

    return (
        <Virtualizer layout={ListLayout}>
            <ListBox
                aria-label="year selection"
                autoFocus
                data-menu
                items={years}
                selectionMode="single"
                selectedKeys={[state.focusedDate.year]}
            >
                {(item) => (
                    <CalendarMenuItem
                        onPress={() => {
                            state.setFocusedDate(
                                state.focusedDate.set({ year: item.id })
                            );
                            onSelection();
                        }}
                        textValue={item.formatted}
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
