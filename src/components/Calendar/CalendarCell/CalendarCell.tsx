import clsx from "clsx";
import {
    CalendarCell as AriaCalendarCell,
    composeRenderProps,
} from "react-aria-components";
import { typography } from "@/utils";
import styles from "./calendarCell.module.css";

/**
 * Props for the {@link CalendarCell} component.
 * Extends React Aria's `CalendarCell` props (excluding `children`).
 */
export interface CalendarCellProps
    extends Omit<
        React.ComponentPropsWithRef<typeof AriaCalendarCell>,
        "children"
    > {
    /** Whether the cell is being rendered within a range calendar. */
    isRangeCalendar?: boolean;
}

/**
 * An individual date cell within the calendar grid.
 *
 * Handles day number rendering, selection indicators, range highlight backgrounds
 * (selection start, in-between range, selection end), and disabled and outside-month styling.
 */
export const CalendarCell: React.FC<CalendarCellProps> = ({
    isRangeCalendar = false,
    ...props
}) => {
    return (
        <AriaCalendarCell
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["cell"], typography.bodyLarge, className)
            )}
            data-range-calendar={isRangeCalendar || undefined}
        >
            {({
                formattedDate,
                isDisabled,
                isOutsideVisibleRange,
                isOutsideMonth,
                isInvalid,
                isSelected,
                isSelectionStart,
                isSelectionEnd,
            }) => {
                const inBetweenRange =
                    isRangeCalendar &&
                    isSelected &&
                    !isSelectionStart &&
                    !isSelectionEnd;

                return (
                    <>
                        {isRangeCalendar && (
                            <span
                                className={clsx(styles["range-indicator"])}
                                data-in-range={inBetweenRange || undefined}
                                data-selection-start={
                                    isSelectionStart || undefined
                                }
                                data-selection-end={isSelectionEnd || undefined}
                                data-invalid={isInvalid || undefined}
                                data-disabled={isDisabled || undefined}
                                data-outside-month={isOutsideMonth || undefined}
                                data-outside-visible-range={
                                    isOutsideVisibleRange || undefined
                                }
                            ></span>
                        )}

                        {formattedDate}
                    </>
                );
            }}
        </AriaCalendarCell>
    );
};
