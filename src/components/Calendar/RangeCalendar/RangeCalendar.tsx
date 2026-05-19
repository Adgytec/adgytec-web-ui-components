import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    RangeCalendar as AriaRangeCalendar,
    Heading,
} from "react-aria-components";
import { IconButton } from "@/components/Button";
import { CalendarGrid } from "../CalendarGrid";
import { CalendarBaseStyles, CalendarHeaderStyles } from "../core";

export const RangeCalendar: React.FC<
    Omit<
        React.ComponentPropsWithRef<typeof AriaRangeCalendar>,
        "children" | "visibleDuration" | "pageBehavior"
    > & {
        weekdayStyle?: "narrow" | "short" | "long";
    }
> = ({ weekdayStyle, className, ...props }) => {
    return (
        <AriaRangeCalendar
            className={(renderProps) =>
                clsx(
                    CalendarBaseStyles,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-calendar
            data-range-calendar
        >
            <header className={clsx(CalendarHeaderStyles)}>
                <IconButton
                    slot="previous"
                    icon={ChevronLeft}
                    color="standard"
                />
                <Heading />
                <IconButton slot="next" icon={ChevronRight} color="standard" />
            </header>

            <CalendarGrid isRangeCalendar weekdayStyle={weekdayStyle} />
        </AriaRangeCalendar>
    );
};
