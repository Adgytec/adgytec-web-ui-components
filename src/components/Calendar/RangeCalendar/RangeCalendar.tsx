import clsx from "clsx";
import { RangeCalendar as AriaRangeCalendar } from "react-aria-components";
import { BaseCalendar } from "../BaseCalendar";
import { CalendarBaseStyles, type WeekdayStyle } from "../core";

export const RangeCalendar: React.FC<
    Omit<
        React.ComponentPropsWithRef<typeof AriaRangeCalendar>,
        "children" | "visibleDuration" | "pageBehavior"
    > & {
        weekdayStyle?: WeekdayStyle;
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
            <BaseCalendar weekdayStyle={weekdayStyle} isRangeCalendar />
        </AriaRangeCalendar>
    );
};
