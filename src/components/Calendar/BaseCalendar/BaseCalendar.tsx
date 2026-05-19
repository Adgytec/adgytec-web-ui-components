import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heading } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { CalendarGrid } from "../CalendarGrid";
import { CalendarHeaderStyles, type WeekdayStyle } from "../core";

export const BaseCalendar: React.FC<{
    isRangeCalendar?: boolean;
    weekdayStyle?: WeekdayStyle;
}> = ({ isRangeCalendar, weekdayStyle }) => {
    return (
        <>
            <header className={clsx(CalendarHeaderStyles)}>
                <IconButton
                    slot="previous"
                    icon={ChevronLeft}
                    color="standard"
                />
                <Heading />
                <IconButton slot="next" icon={ChevronRight} color="standard" />
            </header>

            <CalendarGrid
                weekdayStyle={weekdayStyle}
                isRangeCalendar={isRangeCalendar}
            />
        </>
    );
};
