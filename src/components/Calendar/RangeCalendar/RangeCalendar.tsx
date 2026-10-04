import clsx from "clsx";
import { RangeCalendar as AriaRangeCalendar } from "react-aria-components";
import { BaseCalendar } from "../BaseCalendar";
import { CalendarBaseStyles, type WeekdayStyle } from "../core";

/**
 * Props for the {@link RangeCalendar} component.
 * Extends React Aria's `RangeCalendar` props (excluding `children`, `visibleDuration`, and `pageBehavior`).
 */
export interface RangeCalendarProps
    extends Omit<
        React.ComponentPropsWithRef<typeof AriaRangeCalendar>,
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
 * A date range selection calendar component implementing Material Design 3 Date Range Picker guidelines.
 *
 * Allows users to select a continuous range of dates (start date and end date) with visual
 * range indicators, quick month/year jumping menus, keyboard navigation, and localized formatting.
 * Built on top of React Aria's `RangeCalendar`.
 *
 * @example
 * ```tsx
 * import { RangeCalendar } from '@adgytec/web-ui-components';
 * import { today, getLocalTimeZone } from '@internationalized/date';
 *
 * <RangeCalendar
 *     aria-label="Trip dates"
 *     minValue={today(getLocalTimeZone())}
 *     onChange={(range) => console.log('Selected range:', range.start, range.end)}
 * />
 * ```
 */
export const RangeCalendar: React.FC<RangeCalendarProps> = ({
    weekdayStyle,
    className,
    previousMonthAriaLabel,
    nextMonthAriaLabel,
    previousYearAriaLabel,
    nextYearAriaLabel,
    ...props
}) => {
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
            <BaseCalendar
                weekdayStyle={weekdayStyle}
                isRangeCalendar
                previousMonthAriaLabel={previousMonthAriaLabel}
                nextMonthAriaLabel={nextMonthAriaLabel}
                previousYearAriaLabel={previousYearAriaLabel}
                nextYearAriaLabel={nextYearAriaLabel}
            />
        </AriaRangeCalendar>
    );
};
