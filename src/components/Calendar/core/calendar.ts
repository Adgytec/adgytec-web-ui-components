import styles from "./calendar.module.css";

/**
 * Base CSS module class name providing layout and styling tokens for calendar containers.
 */
export const CalendarBaseStyles = styles["calendar"];

/**
 * Format style for weekday headers in the calendar grid.
 *
 * - `"narrow"`: Typically a single character (e.g. "S", "M", "T").
 * - `"short"`: Abbreviated day name (e.g. "Sun", "Mon", "Tue").
 */
export type WeekdayStyle = "narrow" | "short";

/**
 * Represents a selectable month item within the month picker menu.
 */
export interface MonthItem {
    /** 1-based month index (1 for January through 12 for December). */
    id: number;
    /** Formatted localized month label (e.g. "January" or "Jan"). */
    formatted: string;
}

/**
 * Represents a selectable year item within the year picker menu.
 */
export interface YearItem {
    /** Full numeric year (e.g. 2026). */
    id: number;
    /** Formatted localized year string (e.g. "2026"). */
    formatted: string;
}

/**
 * Default fallback minimum year used in the year selection menu when no `minValue` is specified.
 */
export const defaultMinYear = 1900;

/**
 * Default number of years added to the current year when determining the maximum year
 * in the year selection menu if no `maxValue` is specified.
 */
export const defaultMaxYearIncrement = 100;
