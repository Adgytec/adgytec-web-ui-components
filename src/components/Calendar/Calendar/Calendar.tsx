import clsx from "clsx";
import { Calendar as AriaCalendar } from "react-aria-components";
import { BaseCalendar } from "../BaseCalendar";
import { CalendarBaseStyles, type WeekdayStyle } from "../core";

export const Calendar: React.FC<
    Omit<
        React.ComponentPropsWithRef<typeof AriaCalendar>,
        "children" | "visibleDuration" | "pageBehavior"
    > & {
        weekdayStyle?: WeekdayStyle;
    }
> = ({ weekdayStyle, className, ...props }) => {
    return (
        <AriaCalendar
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
        >
            <BaseCalendar weekdayStyle={weekdayStyle} />
        </AriaCalendar>
    );
};
