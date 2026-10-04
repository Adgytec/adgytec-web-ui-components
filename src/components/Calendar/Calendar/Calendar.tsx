import clsx from "clsx";
import { Calendar as AriaCalendar } from "react-aria-components";
import { BaseCalendar } from "../BaseCalendar";
import { CalendarBaseStyles, type WeekdayStyle } from "../core";

/**
 * Props for the {@link Calendar} component.
 * Extends React Aria's `Calendar` props (excluding `children`, `visibleDuration`, and `pageBehavior`).
 */
export interface CalendarProps
    extends Omit<
        React.ComponentPropsWithRef<typeof AriaCalendar>,
        "children" | "visibleDuration" | "pageBehavior"
    > {
    /**
     * Formatting style for weekday column headers in the calendar grid.
     *
     * - `"narrow"`: Typically a single character (e.g. "S", "M", "T").
     * - `"short"`: Abbreviated weekday name (e.g. "Sun", "Mon", "Tue").
     */
    weekdayStyle?: WeekdayStyle;

    /** Accessible label for the previous month button. */
    previousMonthAriaLabel?: string;

    /** Accessible label for the next month button. */
    nextMonthAriaLabel?: string;

    /** Accessible label for the previous year button. */
    previousYearAriaLabel?: string;

    /** Accessible label for the next year button. */
    nextYearAriaLabel?: string;
}

/**
 * A single date selection calendar component implementing Material Design 3 Date Picker guidelines.
 *
 * Features an interactive date grid, fast month and year selector menus, localized date formatting,
 * keyboard accessibility, and touch-responsive ripple effects. Built on top of React Aria's `Calendar`.
 *
 * @example
 * ```tsx
 * import { Calendar } from '@adgytec/web-ui-components';
 * import { today, getLocalTimeZone } from '@internationalized/date';
 *
 * <Calendar
 *     aria-label="Appointment date"
 *     minValue={today(getLocalTimeZone())}
 *     onChange={(date) => console.log('Selected date:', date)}
 * />
 * ```
 */
export const Calendar: React.FC<CalendarProps> = ({
    weekdayStyle,
    className,
    previousMonthAriaLabel,
    nextMonthAriaLabel,
    previousYearAriaLabel,
    nextYearAriaLabel,
    ...props
}) => {
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
            <BaseCalendar
                weekdayStyle={weekdayStyle}
                previousMonthAriaLabel={previousMonthAriaLabel}
                nextMonthAriaLabel={nextMonthAriaLabel}
                previousYearAriaLabel={previousYearAriaLabel}
                nextYearAriaLabel={nextYearAriaLabel}
            />
        </AriaCalendar>
    );
};
